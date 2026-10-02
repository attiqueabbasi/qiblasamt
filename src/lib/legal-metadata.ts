import type { Metadata } from 'next';

const SITE_URL = 'https://qiblasamt.com';
const OG_IMAGE = '/images/qibla-finder-og.webp';

interface LegalMetadataInput {
  path: string;
  title: string;
  description: string;
  index?: boolean;
}

export function buildLegalMetadata({ path, title, description, index = true }: LegalMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    robots: { index, follow: true },
    openGraph: {
      type: 'website',
      locale: 'ar_AR',
      url,
      siteName: 'قبلة سمت',
      title,
      description,
      images: [{ url: OG_IMAGE, width: 1672, height: 941, alt: 'قبلة سمت' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
