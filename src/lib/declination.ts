import type { Coordinates } from './qibla';

let cachedModel: ReturnType<typeof import('geomagnetism').model> | null = null;

/**
 * Magnetic declination in degrees at a coordinate (east positive), using the
 * WMM model bundled with `geomagnetism`. Loaded lazily/client-side only.
 */
export async function getMagneticDeclination(coords: Coordinates): Promise<number> {
  const geomagnetism = await import('geomagnetism');
  if (!cachedModel) {
    cachedModel = geomagnetism.model(new Date(), { allowOutOfBoundsModel: true });
  }
  const point = cachedModel.point([coords.lat, coords.lng]);
  return point.decl;
}
