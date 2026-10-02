/**
 * Pure Qibla math. No DOM/browser APIs here so it stays trivially unit-testable.
 */

export interface Coordinates {
  lat: number;
  lng: number;
}

/** Kaaba coordinates (Masjid al-Haram, Makkah). */
export const KAABA: Coordinates = { lat: 21.4225, lng: 39.8262 };

const EARTH_RADIUS_KM = 6371;

const toRad = (deg: number): number => (deg * Math.PI) / 180;
const toDeg = (rad: number): number => (rad * 180) / Math.PI;

/** Normalize any angle in degrees to the [0, 360) range. */
export function normalizeDegrees(deg: number): number {
  const n = deg % 360;
  return n < 0 ? n + 360 : n;
}

/**
 * Initial great-circle bearing (forward azimuth) from `from` to `to`,
 * measured clockwise from true north, normalized to [0, 360).
 */
export function calculateBearing(from: Coordinates, to: Coordinates): number {
  const phi1 = toRad(from.lat);
  const phi2 = toRad(to.lat);
  const deltaLambda = toRad(to.lng - from.lng);

  const y = Math.sin(deltaLambda) * Math.cos(phi2);
  const x =
    Math.cos(phi1) * Math.sin(phi2) -
    Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda);

  const theta = Math.atan2(y, x);
  return normalizeDegrees(toDeg(theta));
}

/** Qibla bearing (degrees, true north) from a user location to the Kaaba. */
export function calculateQiblaBearing(from: Coordinates): number {
  return calculateBearing(from, KAABA);
}

/** Great-circle distance in kilometers between two coordinates (haversine). */
export function calculateDistanceKm(from: Coordinates, to: Coordinates): number {
  const phi1 = toRad(from.lat);
  const phi2 = toRad(to.lat);
  const deltaPhi = toRad(to.lat - from.lat);
  const deltaLambda = toRad(to.lng - from.lng);

  const a =
    Math.sin(deltaPhi / 2) ** 2 +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS_KM * c;
}

/** Distance in kilometers from a user location to the Kaaba. */
export function calculateDistanceToKaabaKm(from: Coordinates): number {
  return calculateDistanceKm(from, KAABA);
}

const CARDINAL_LABELS_AR = [
  'شمال',
  'شمال شرق',
  'شرق',
  'جنوب شرق',
  'جنوب',
  'جنوب غرب',
  'غرب',
  'شمال غرب',
] as const;

const CARDINAL_LABELS_EN = [
  'N',
  'NE',
  'E',
  'SE',
  'S',
  'SW',
  'W',
  'NW',
] as const;

/** Convert a bearing (degrees) to an 8-point cardinal label. */
export function bearingToCardinal(
  bearing: number,
  locale: 'ar' | 'en' = 'ar'
): string {
  const labels = locale === 'ar' ? CARDINAL_LABELS_AR : CARDINAL_LABELS_EN;
  const normalized = normalizeDegrees(bearing);
  const index = Math.round(normalized / 45) % 8;
  return labels[index] as string;
}

/**
 * Low-pass filter a heading (0-360) by smoothing the *delta* between the
 * previous and next reading, so the filter survives the 359deg -> 0deg wrap
 * without back-spinning the needle the long way around.
 *
 * `alpha` in (0, 1]: higher = more responsive, lower = smoother/slower.
 */
export function smoothHeading(prev: number, next: number, alpha: number): number {
  const a = Math.min(1, Math.max(0, alpha));
  let delta = normalizeDegrees(next - prev);
  if (delta > 180) delta -= 360;
  return normalizeDegrees(prev + delta * a);
}

/** Shortest signed angular difference (next - prev) in (-180, 180]. */
export function angularDifference(a: number, b: number): number {
  let delta = normalizeDegrees(b - a);
  if (delta > 180) delta -= 360;
  return delta;
}

/** Format a distance in km for display (rounded, thousands separated). */
export function formatDistanceKm(km: number, locale: 'ar' | 'en' = 'ar'): string {
  const rounded = Math.round(km);
  return new Intl.NumberFormat(locale === 'ar' ? 'ar-EG' : 'en-US').format(rounded);
}

/** Format a bearing in degrees for display (rounded, 0-359). */
export function formatBearing(bearing: number, locale: 'ar' | 'en' = 'ar'): string {
  const rounded = Math.round(normalizeDegrees(bearing));
  return new Intl.NumberFormat(locale === 'ar' ? 'ar-EG' : 'en-US').format(rounded);
}
