'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  bearingToCardinal,
  calculateDistanceToKaabaKm,
  calculateQiblaBearing,
  formatBearing,
  formatDistanceKm,
  normalizeDegrees,
  type Coordinates,
} from '@/lib/qibla';
import {
  getCurrentPosition,
  GeolocationFailure,
  type GeolocationErrorReason,
} from '@/lib/geolocation';
import { reverseGeocode, type PlaceResult } from '@/lib/geocoding';
import { getMagneticDeclination } from '@/lib/declination';
import { useDeviceOrientation } from '@/lib/useDeviceOrientation';
import CompassDial from './CompassDial';
import LocationSearch from './LocationSearch';
import Image from 'next/image';

interface LocationState {
  coords: Coordinates;
  placeName: string | null;
  accuracyMeters: number | null;
  source: 'geolocation' | 'search';
}

const GEO_ERROR_MESSAGES: Record<GeolocationErrorReason, string> = {
  unsupported: 'متصفحك لا يدعم خدمة تحديد الموقع. يرجى البحث عن مدينتك يدويًا.',
  'permission-denied': 'تم رفض إذن الوصول إلى الموقع. يمكنك البحث عن مدينتك بدلاً من ذلك.',
  'position-unavailable': 'تعذّر تحديد موقعك حاليًا. يرجى المحاولة مجددًا أو البحث عن مدينتك.',
  timeout: 'استغرق تحديد الموقع وقتًا طويلاً. يرجى المحاولة مجددًا أو البحث عن مدينتك.',
  unknown: 'حدث خطأ غير متوقع أثناء تحديد الموقع. يرجى البحث عن مدينتك.',
};

export default function QiblaTool() {
  const [location, setLocation] = useState<LocationState | null>(null);
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [declination, setDeclination] = useState(0);
  const [northMode, setNorthMode] = useState<'true' | 'magnetic'>('true');
  const [aligned, setAligned] = useState(false);
  const [showManualSearch, setShowManualSearch] = useState(false);

  const { status, needsPermission, sensorDetected, headingRef, enable } = useDeviceOrientation();

  useEffect(() => {
    if (!needsPermission && status === 'idle') {
      enable();
    }
  }, [needsPermission, status, enable]);

  useEffect(() => {
    if (!location) return;
    let cancelled = false;
    getMagneticDeclination(location.coords).then((decl) => {
      if (!cancelled) setDeclination(decl);
    });
    return () => {
      cancelled = true;
    };
  }, [location]);

  const handleUseMyLocation = useCallback(async () => {
    setLocating(true);
    setLocationError(null);
    try {
      const result = await getCurrentPosition();
      setLocation({
        coords: result.coords,
        placeName: null,
        accuracyMeters: result.accuracyMeters,
        source: 'geolocation',
      });
      const name = await reverseGeocode(result.coords, 'ar');
      setLocation((prev) =>
        prev && prev.source === 'geolocation' ? { ...prev, placeName: name } : prev
      );
    } catch (err) {
      const reason = err instanceof GeolocationFailure ? err.reason : 'unknown';
      setLocationError(GEO_ERROR_MESSAGES[reason]);
    } finally {
      setLocating(false);
    }
  }, []);

  const handleSelectPlace = useCallback((place: PlaceResult) => {
    setLocationError(null);
    setLocation({
      coords: place.coords,
      placeName: place.displayName,
      accuracyMeters: null,
      source: 'search',
    });
  }, []);

  const resetLocation = useCallback(() => {
    setLocation(null);
    setLocationError(null);
    setDeclination(0);
  }, []);

  const qiblaBearingTrue = useMemo(
    () => (location ? calculateQiblaBearing(location.coords) : null),
    [location]
  );
  const distanceKm = useMemo(
    () => (location ? calculateDistanceToKaabaKm(location.coords) : null),
    [location]
  );

  const magneticQiblaBearing = useMemo(
    () => (qiblaBearingTrue !== null ? normalizeDegrees(qiblaBearingTrue - declination) : null),
    [qiblaBearingTrue, declination]
  );

  const displayBearing = northMode === 'true' ? qiblaBearingTrue : magneticQiblaBearing;

  const getHeading = useCallback(() => {
    const raw = headingRef.current;
    if (raw === null) return null;
    return northMode === 'true' ? normalizeDegrees(raw + declination) : raw;
  }, [headingRef, northMode, declination]);

  const compassMode: 'live' | 'static' = status === 'active' && sensorDetected ? 'live' : 'static';

  const mapsUrl = location
    ? `https://www.google.com/maps/dir/?api=1&origin=${location.coords.lat},${location.coords.lng}&destination=21.4225,39.8262&travelmode=driving`
    : null;

  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-border bg-surface p-5 shadow-sm sm:p-8"
    >
      {!location ? (
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="w-full max-w-[300px] md:max-w-[260px]">
            <Image
              src="/images/qibla-tool-compass.webp"
              alt="بوصلة قبلة دائرية بإطار خشبي وسهم يشير نحو أيقونة الكعبة المشرفة"
              width={500}
              height={500}
              sizes="(min-width: 768px) 260px, 300px"
              className="h-auto w-full"
            />
          </div>

          <button
            type="button"
            onClick={handleUseMyLocation}
            disabled={locating}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-sm transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {locating ? (
              'جارٍ تحديد الموقع…'
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2v3M12 19v3M2 12h3M19 12h3M12 8a4 4 0 100 8 4 4 0 000-8z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                تحديد اتجاه القِبلة
              </>
            )}
          </button>

          {locationError && (
            <p className="w-full max-w-md rounded-lg bg-warning/10 px-4 py-2 text-sm text-warning" role="alert">
              {locationError}
            </p>
          )}

          {!showManualSearch ? (
            <button
              type="button"
              onClick={() => setShowManualSearch(true)}
              className="text-sm font-semibold text-text-secondary underline-offset-2 hover:text-primary hover:underline"
            >
              أو ابحث عن مدينتك يدويًا
            </button>
          ) : (
            <div className="w-full max-w-md">
              <LocationSearch
                onSelect={handleSelectPlace}
                onUseMyLocation={handleUseMyLocation}
                locating={locating}
                hideLocationButton
              />
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-secondary">
            <span>
              📍 {location.placeName ?? `${location.coords.lat.toFixed(4)}, ${location.coords.lng.toFixed(4)}`}
            </span>
            {location.accuracyMeters !== null && (
              <span>· دقة الموقع: ~{Math.round(location.accuracyMeters)} م</span>
            )}
            <button
              type="button"
              onClick={resetLocation}
              className="font-semibold text-primary underline-offset-2 hover:underline"
            >
              تغيير الموقع
            </button>
          </div>

          <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-center">
          <CompassDial
            mode={compassMode}
            targetBearing={displayBearing ?? 0}
            getHeading={compassMode === 'live' ? getHeading : undefined}
            onAlignedChange={setAligned}
          />

          <div className="flex flex-col gap-5">
            <div>
              <div
                className={`flex flex-wrap items-baseline gap-x-2 gap-y-1 text-4xl font-extrabold transition-colors sm:text-5xl ${
                  aligned && compassMode === 'live' ? 'text-success' : 'text-primary'
                }`}
              >
                <span>{formatBearing(displayBearing ?? 0)}°</span>
                <span className="text-xl font-semibold text-text sm:text-2xl">
                  {bearingToCardinal(displayBearing ?? 0)}
                </span>
              </div>
              <p className="mt-1 text-sm text-text-secondary">
                المسافة إلى الكعبة المشرفة: {formatDistanceKm(distanceKm ?? 0)} كم
              </p>
              {aligned && compassMode === 'live' && (
                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-sm font-semibold text-success">
                  ✓ أنت الآن تواجه القبلة
                </p>
              )}
            </div>

            {compassMode === 'static' && (
              <div className="rounded-xl border border-border bg-white/70 p-4 text-sm leading-relaxed text-text-secondary dark:bg-transparent">
                {needsPermission && status !== 'active' ? (
                  <>
                    <p className="mb-3">
                      يمكن لهذا الجهاز استخدام البوصلة الحية. اضغط الزر لتفعيل مستشعر الاتجاه.
                    </p>
                    <button
                      type="button"
                      onClick={enable}
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover"
                    >
                      تفعيل البوصلة
                    </button>
                  </>
                ) : status === 'denied' ? (
                  <p>
                    تم رفض إذن البوصلة. يعرض المخطط أعلاه الاتجاه الثابت: واجه الشمال{' '}
                    {northMode === 'true' ? 'الحقيقي' : 'المغناطيسي'} ثم استدر{' '}
                    <strong className="text-text">{formatBearing(displayBearing ?? 0)}°</strong> باتجاه{' '}
                    <strong className="text-text">{bearingToCardinal(displayBearing ?? 0)}</strong>.
                  </p>
                ) : (
                  <p>
                    لا يوجد مستشعر بوصلة على هذا الجهاز (كالحواسيب المكتبية)، لذا يبقى الشمال ثابتًا في
                    الأعلى. واجه الشمال {northMode === 'true' ? 'الحقيقي' : 'المغناطيسي'} ثم استدر{' '}
                    <strong className="text-text">{formatBearing(displayBearing ?? 0)}°</strong> باتجاه{' '}
                    <strong className="text-text">{bearingToCardinal(displayBearing ?? 0)}</strong>{' '}
                    للوصول إلى اتجاه القبلة. العلامة الذهبية على المخطط تشير دائمًا إلى القبلة.
                  </p>
                )}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex rounded-lg border border-border bg-white p-1 dark:bg-transparent">
                <button
                  type="button"
                  onClick={() => setNorthMode('true')}
                  className={`rounded-md px-3 py-1.5 text-sm font-semibold transition-colors ${
                    northMode === 'true' ? 'bg-primary text-white' : 'text-text-secondary'
                  }`}
                >
                  الشمال الحقيقي
                </button>
                <button
                  type="button"
                  onClick={() => setNorthMode('magnetic')}
                  className={`rounded-md px-3 py-1.5 text-sm font-semibold transition-colors ${
                    northMode === 'magnetic' ? 'bg-primary text-white' : 'text-text-secondary'
                  }`}
                >
                  الشمال المغناطيسي
                </button>
              </div>

              {mapsUrl && (
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover hover:underline"
                >
                  فتح الاتجاه عبر خرائط جوجل
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M7 17L17 7M17 7H9M17 7v8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
          </div>
        </>
      )}
    </div>
  );
}
