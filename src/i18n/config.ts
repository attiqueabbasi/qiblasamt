import arMessages from '../../messages/ar.json';
import enMessages from '../../messages/en.json';

export const locales = ['ar', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ar';

/**
 * Static export builds a single locale today (Arabic). next-intl is wired up
 * without URL-routing middleware so a second locale can be enabled later by
 * switching `defaultLocale` (or adding a locale switcher) without a rewrite.
 */
export const messagesByLocale: Record<Locale, typeof arMessages> = {
  ar: arMessages,
  en: enMessages,
};

export const dirByLocale: Record<Locale, 'rtl' | 'ltr'> = {
  ar: 'rtl',
  en: 'ltr',
};
