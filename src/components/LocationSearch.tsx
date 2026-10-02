'use client';

import { useEffect, useRef, useState } from 'react';
import { searchPlaces, type PlaceResult } from '@/lib/geocoding';

interface LocationSearchProps {
  onSelect: (place: PlaceResult) => void;
  onUseMyLocation: () => void;
  locating: boolean;
  hideLocationButton?: boolean;
}

const DEBOUNCE_MS = 450;

export default function LocationSearch({
  onSelect,
  onUseMyLocation,
  locating,
  hideLocationButton = false,
}: LocationSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PlaceResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const requestIdRef = useRef(0);
  const skipNextSearchRef = useRef(false);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (skipNextSearchRef.current) {
      skipNextSearchRef.current = false;
      setLoading(false);
      return;
    }

    if (query.trim().length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const currentId = ++requestIdRef.current;

    debounceRef.current = setTimeout(async () => {
      const places = await searchPlaces(query, 'ar');
      if (requestIdRef.current === currentId) {
        setResults(places);
        setLoading(false);
        setOpen(true);
      }
    }, DEBOUNCE_MS);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  return (
    <div className="relative w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => results.length > 0 && setOpen(true)}
            placeholder="ابحث عن مدينتك… مثال: الرياض"
            aria-label="ابحث عن مدينتك لتحديد اتجاه القبلة"
            className="h-12 w-full rounded-xl border border-border bg-white px-4 text-[15px] text-text placeholder:text-text-secondary/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:bg-surface"
          />
          {loading && (
            <span className="absolute end-4 top-1/2 -translate-y-1/2 text-xs text-text-secondary">
              جارِ البحث…
            </span>
          )}

          {open && results.length > 0 && (
            <ul
              role="listbox"
              className="absolute z-20 mt-2 max-h-64 w-full overflow-y-auto rounded-xl border border-border bg-white shadow-lg dark:bg-surface"
            >
              {results.map((place, idx) => (
                <li key={`${place.coords.lat}-${place.coords.lng}-${idx}`}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelect(place);
                      skipNextSearchRef.current = true;
                      setQuery(place.displayName);
                      setResults([]);
                      setOpen(false);
                    }}
                    className="block w-full px-4 py-3 text-start text-sm text-text hover:bg-surface focus:bg-surface focus:outline-none"
                  >
                    {place.displayName}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {!hideLocationButton && (
          <button
            type="button"
            onClick={onUseMyLocation}
            disabled={locating}
            className="flex h-12 min-w-[180px] items-center justify-center gap-2 rounded-xl bg-primary px-5 text-[15px] font-semibold text-white transition-colors hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {locating ? (
              'جارٍ تحديد الموقع…'
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2v3M12 19v3M2 12h3M19 12h3M12 8a4 4 0 100 8 4 4 0 000-8z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                استخدم موقعي الحالي
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
