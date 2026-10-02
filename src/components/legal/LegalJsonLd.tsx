const SITE_URL = 'https://qiblasamt.com';

interface LegalJsonLdProps {
  path: string;
  name: string;
  description: string;
  breadcrumbLabel: string;
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage';
  includeOrganization?: boolean;
  contactEmail?: string;
}

export default function LegalJsonLd({
  path,
  name,
  description,
  breadcrumbLabel,
  pageType = 'WebPage',
  includeOrganization = false,
  contactEmail,
}: LegalJsonLdProps) {
  const url = `${SITE_URL}${path}`;

  const webPage = {
    '@context': 'https://schema.org',
    '@type': pageType,
    name,
    description,
    url,
    inLanguage: 'ar',
    isPartOf: {
      '@type': 'WebSite',
      name: 'قبلة سمت',
      url: SITE_URL,
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: breadcrumbLabel, item: url },
    ],
  };

  const organization = includeOrganization
    ? {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'قبلة سمت',
        url: SITE_URL,
        ...(contactEmail
          ? { contactPoint: [{ '@type': 'ContactPoint', email: contactEmail, contactType: 'customer support' }] }
          : {}),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {organization && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      )}
    </>
  );
}
