import type { Coordinates } from './qibla';

const NOMINATIM_BASE = 'https://nominatim.openstreetmap.org';

export interface PlaceResult {
  displayName: string;
  coords: Coordinates;
}

/** Reverse-geocode coordinates to a human-readable place name via Nominatim. */
export async function reverseGeocode(
  coords: Coordinates,
  locale: 'ar' | 'en' = 'ar'
): Promise<string | null> {
  try {
    const url = new URL(`${NOMINATIM_BASE}/reverse`);
    url.searchParams.set('format', 'jsonv2');
    url.searchParams.set('lat', String(coords.lat));
    url.searchParams.set('lon', String(coords.lng));
    url.searchParams.set('accept-language', locale);
    url.searchParams.set('zoom', '10');

    const response = await fetch(url.toString(), {
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) return null;

    const data = (await response.json()) as {
      display_name?: string;
      address?: Record<string, string>;
    };

    const address = data.address;
    if (address) {
      const city = address.city || address.town || address.village || address.county;
      const country = address.country;
      if (city && country) return `${city}، ${country}`;
      if (country) return country;
    }
    return data.display_name ?? null;
  } catch {
    return null;
  }
}

/** Forward-geocode a free-text query (city name) to a list of matching places. */
export async function searchPlaces(
  query: string,
  locale: 'ar' | 'en' = 'ar'
): Promise<PlaceResult[]> {
  const trimmed = query.trim();
  if (trimmed.length < 2) return [];

  try {
    const url = new URL(`${NOMINATIM_BASE}/search`);
    url.searchParams.set('format', 'jsonv2');
    url.searchParams.set('q', trimmed);
    url.searchParams.set('accept-language', locale);
    url.searchParams.set('limit', '6');
    url.searchParams.set('addressdetails', '0');

    const response = await fetch(url.toString(), {
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) return [];

    const data = (await response.json()) as Array<{
      display_name: string;
      lat: string;
      lon: string;
    }>;

    return data.map((item) => ({
      displayName: item.display_name,
      coords: { lat: parseFloat(item.lat), lng: parseFloat(item.lon) },
    }));
  } catch {
    return [];
  }
}
