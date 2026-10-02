import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE_URL = 'https://qiblasamt.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/about/`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/contact/`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/privacy-policy/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/disclaimer/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
