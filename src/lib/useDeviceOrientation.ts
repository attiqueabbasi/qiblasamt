'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export type CompassStatus = 'idle' | 'requesting' | 'active' | 'denied' | 'unsupported';

interface DeviceOrientationEventiOS {
  webkitCompassHeading?: number;
}

interface DeviceOrientationEventConstructoriOS {
  requestPermission?: () => Promise<'granted' | 'denied'>;
}

interface UseDeviceOrientationResult {
  status: CompassStatus;
  needsPermission: boolean;
  sensorDetected: boolean;
  /** Latest raw magnetic heading (0-359), updated every sensor event without triggering re-renders. */
  headingRef: React.MutableRefObject<number | null>;
  enable: () => Promise<void>;
}

const SENSOR_TIMEOUT_MS = 1800;

function getScreenAngle(): number {
  if (typeof window === 'undefined') return 0;
  const orientation = window.screen?.orientation;
  if (orientation && typeof orientation.angle === 'number') return orientation.angle;
  const legacy = (window as unknown as { orientation?: number }).orientation;
  return typeof legacy === 'number' ? legacy : 0;
}

export function useDeviceOrientation(): UseDeviceOrientationResult {
  const [status, setStatus] = useState<CompassStatus>('idle');
  const [needsPermission, setNeedsPermission] = useState(false);
  const [sensorDetected, setSensorDetected] = useState(false);
  const headingRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const listenerAttachedRef = useRef(false);
  const eventNameRef = useRef<'deviceorientationabsolute' | 'deviceorientation'>(
    'deviceorientation'
  );

  useEffect(() => {
    const DOE = typeof window !== 'undefined' ? window.DeviceOrientationEvent : undefined;
    const ctor = DOE as unknown as DeviceOrientationEventConstructoriOS | undefined;
    if (ctor && typeof ctor.requestPermission === 'function') {
      setNeedsPermission(true);
    }
  }, []);

  const handleOrientation = useCallback((event: DeviceOrientationEvent) => {
    const iosEvent = event as DeviceOrientationEvent & DeviceOrientationEventiOS;
    let heading: number | null = null;

    if (typeof iosEvent.webkitCompassHeading === 'number' && !Number.isNaN(iosEvent.webkitCompassHeading)) {
      heading = iosEvent.webkitCompassHeading;
    } else if (event.alpha !== null) {
      const screenAngle = getScreenAngle();
      heading = (360 - event.alpha + screenAngle) % 360;
      if (heading < 0) heading += 360;
    }

    if (heading !== null) {
      headingRef.current = heading;
      setSensorDetected(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
  }, []);

  const attachListeners = useCallback(() => {
    if (listenerAttachedRef.current || typeof window === 'undefined') return;
    listenerAttachedRef.current = true;

    eventNameRef.current =
      'ondeviceorientationabsolute' in window ? 'deviceorientationabsolute' : 'deviceorientation';
    window.addEventListener(eventNameRef.current, handleOrientation as EventListener, true);

    timeoutRef.current = setTimeout(() => {
      if (headingRef.current === null) {
        setStatus('unsupported');
      }
    }, SENSOR_TIMEOUT_MS);
  }, [handleOrientation]);

  const enable = useCallback(async () => {
    if (typeof window === 'undefined') return;
    const DOE = window.DeviceOrientationEvent;
    const ctor = DOE as unknown as DeviceOrientationEventConstructoriOS | undefined;

    if (ctor && typeof ctor.requestPermission === 'function') {
      setStatus('requesting');
      try {
        const result = await ctor.requestPermission();
        if (result === 'granted') {
          setStatus('active');
          attachListeners();
        } else {
          setStatus('denied');
        }
      } catch {
        setStatus('denied');
      }
    } else if (typeof DOE !== 'undefined') {
      setStatus('active');
      attachListeners();
    } else {
      setStatus('unsupported');
    }
  }, [attachListeners]);

  useEffect(() => {
    return () => {
      if (typeof window === 'undefined' || !listenerAttachedRef.current) return;
      window.removeEventListener(eventNameRef.current, handleOrientation as EventListener, true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [handleOrientation]);

  return { status, needsPermission, sensorDetected, headingRef, enable };
}
