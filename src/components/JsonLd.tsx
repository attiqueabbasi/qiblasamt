import { FAQ_ITEMS } from '@/lib/faq-data';
import { defaultLocale, messagesByLocale } from '@/i18n/config';

const SITE_URL = 'https://qiblasamt.com';
const messages = messagesByLocale[defaultLocale];

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${SITE_URL}/#webpage`;
const FAQ_ID = `${SITE_URL}/#faq`;

/**
 * Homepage structured data only: Organization, WebSite, WebPage, FAQPage,
 * linked via @id in a single @graph. No SoftwareApplication/ratings —
 * per the content spec, those wait until the tool has real reviews.
 */
export default function JsonLd() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: messages.meta.siteName,
        alternateName: 'Qibla Samt',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo.webp`,
          width: 1999,
          height: 666,
        },
        description: messages.meta.description,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            email: 'info@qiblasamt.com',
            contactType: 'customer support',
            availableLanguage: ['ar', 'en'],
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: messages.meta.siteName,
        alternateName: 'Qibla Samt',
        url: SITE_URL,
        inLanguage: 'ar',
        publisher: { '@id': ORG_ID },
      },
      {
        '@type': 'WebPage',
        '@id': WEBPAGE_ID,
        url: SITE_URL,
        name: messages.meta.title,
        description: messages.meta.description,
        inLanguage: 'ar',
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORG_ID },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/qibla-finder-og.webp`,
          width: 1672,
          height: 941,
        },
        dateModified: '2026-09-23',
      },
      {
        '@type': 'FAQPage',
        '@id': FAQ_ID,
        isPartOf: { '@id': WEBPAGE_ID },
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
