'use client';

import { useEffect, useRef, useState } from 'react';
import { angularDifference, normalizeDegrees, smoothHeading } from '@/lib/qibla';

interface CompassDialProps {
  /** 'live' rotates the dial with the device sensor; 'static' is a fixed north-up view. */
  mode: 'live' | 'static';
  /** Qibla bearing in the active reference frame (true or magnetic north), 0-359. */
  targetBearing: number;
  /** Returns the current device heading in the same reference frame, or null if unknown. */
  getHeading?: () => number | null;
  onAlignedChange?: (aligned: boolean) => void;
}

const ALIGNMENT_THRESHOLD_DEG = 3;
const SMOOTHING_ALPHA = 0.15;

export default function CompassDial({
  mode,
  targetBearing,
  getHeading,
  onAlignedChange,
}: CompassDialProps) {
  const [displayHeading, setDisplayHeading] = useState(0);
  const [aligned, setAligned] = useState(false);
  const smoothedRef = useRef(0);
  const alignedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastRenderedRef = useRef(0);

  useEffect(() => {
    if (mode !== 'live' || !getHeading) return;

    const tick = () => {
      const raw = getHeading();
      if (raw !== null) {
        smoothedRef.current = smoothHeading(smoothedRef.current, raw, SMOOTHING_ALPHA);
        const rounded = Math.round(smoothedRef.current * 2) / 2;
        if (Math.abs(angularDifference(lastRenderedRef.current, rounded)) >= 0.5) {
          lastRenderedRef.current = rounded;
          setDisplayHeading(rounded);
        }

        const diff = Math.abs(angularDifference(smoothedRef.current, targetBearing));
        const isAligned = diff <= ALIGNMENT_THRESHOLD_DEG;
        if (isAligned !== alignedRef.current) {
          alignedRef.current = isAligned;
          setAligned(isAligned);
          onAlignedChange?.(isAligned);
          if (isAligned && typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate(120);
          }
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [mode, getHeading, targetBearing, onAlignedChange]);

  const dialRotation = mode === 'live' ? -displayHeading : 0;
  const markerAngle = normalizeDegrees(targetBearing);
  const ringColorClass = mode === 'live' && aligned ? 'stroke-success' : 'stroke-primary';

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[280px]">
      <svg
        viewBox="0 0 280 280"
        className="h-full w-full"
        role="img"
        aria-label={mode === 'live' ? 'بوصلة اتجاه القبلة الحية' : 'بوصلة اتجاه القبلة الثابتة'}
      >
        <circle
          cx="140"
          cy="140"
          r="128"
          fill="var(--color-surface)"
          stroke="var(--color-border)"
          strokeWidth="2"
        />

        <circle
          cx="140"
          cy="140"
          r="120"
          fill="none"
          className={`${ringColorClass} transition-[stroke] duration-300`}
          strokeWidth="3"
          style={aligned ? { filter: 'drop-shadow(0 0 6px rgba(46,158,107,0.6))' } : undefined}
        />

        <g
          style={{
            transform: `rotate(${dialRotation}deg)`,
            transformOrigin: '140px 140px',
            transition: mode === 'static' ? 'none' : 'transform 60ms linear',
          }}
        >
          {Array.from({ length: 72 }).map((_, i) => {
            const angle = i * 5;
            const isMajor = angle % 90 === 0;
            const isMinor = angle % 30 === 0;
            const length = isMajor ? 16 : isMinor ? 11 : 6;
            const y2 = 20 + length;
            return (
              <line
                key={angle}
                x1="140"
                y1="20"
                x2="140"
                y2={y2}
                stroke={isMajor ? 'var(--color-primary)' : 'var(--color-border)'}
                strokeWidth={isMajor ? 2.5 : 1.5}
                transform={`rotate(${angle} 140 140)`}
              />
            );
          })}

          {[
            { label: 'N', angle: 0 },
            { label: 'E', angle: 90 },
            { label: 'S', angle: 180 },
            { label: 'W', angle: 270 },
          ].map(({ label, angle }) => {
            const rad = (angle * Math.PI) / 180;
            const x = 140 + Math.sin(rad) * 96;
            const y = 140 - Math.cos(rad) * 96;
            return (
              <text
                key={label}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="15"
                fontWeight="700"
                fill={label === 'N' ? 'var(--color-primary)' : 'var(--color-text-secondary)'}
                style={{ transform: `rotate(${-dialRotation}deg)`, transformOrigin: `${x}px ${y}px` }}
              >
                {label}
              </text>
            );
          })}

          <g
            transform={`rotate(${markerAngle} 140 140)`}
            aria-label="اتجاه الكعبة المشرفة"
          >
            <line x1="140" y1="140" x2="140" y2="44" stroke="var(--color-accent)" strokeWidth="3" />
            <g transform="translate(140 34)">
              <circle
                r="14"
                fill="var(--color-accent)"
                style={{ transform: `rotate(${-(markerAngle + dialRotation)}deg)` }}
              />
              <g style={{ transform: `rotate(${-(markerAngle + dialRotation)}deg)` }}>
                <rect x="-6" y="-6" width="12" height="12" fill="#FFFFFF" opacity="0.92" rx="1.5" />
              </g>
            </g>
          </g>
        </g>

        <circle cx="140" cy="140" r="5" fill="var(--color-primary)" />

        {mode === 'live' && (
          <polygon
            points="140,6 133,26 147,26"
            fill="var(--color-text)"
            aria-hidden="true"
          />
        )}
      </svg>
    </div>
  );
}
