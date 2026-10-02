import type { Coordinates } from './qibla';

export interface GeolocationResult {
  coords: Coordinates;
  accuracyMeters: number;
}

export type GeolocationErrorReason =
  | 'unsupported'
  | 'permission-denied'
  | 'position-unavailable'
  | 'timeout'
  | 'unknown';

export class GeolocationFailure extends Error {
  reason: GeolocationErrorReason;
  constructor(reason: GeolocationErrorReason, message: string) {
    super(message);
    this.reason = reason;
    this.name = 'GeolocationFailure';
  }
}

/** Promise wrapper around the browser Geolocation API with a friendly error shape. */
export function getCurrentPosition(
  options: PositionOptions = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  }
): Promise<GeolocationResult> {
  return new Promise((resolve, reject) => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      reject(new GeolocationFailure('unsupported', 'Geolocation is not supported.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          coords: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          accuracyMeters: position.coords.accuracy,
        });
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            reject(new GeolocationFailure('permission-denied', error.message));
            break;
          case error.POSITION_UNAVAILABLE:
            reject(new GeolocationFailure('position-unavailable', error.message));
            break;
          case error.TIMEOUT:
            reject(new GeolocationFailure('timeout', error.message));
            break;
          default:
            reject(new GeolocationFailure('unknown', error.message));
        }
      },
      options
    );
  });
}
