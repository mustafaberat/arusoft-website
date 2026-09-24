import React from 'react';
import Head from 'next/head';

export const SITE_URL = 'https://arusoft.vercel.app';
export const SITE_NAME = 'ARU SOFT';
export const DEFAULT_DESCRIPTION =
  'ARU SOFT builds web apps, mobile games, and custom software. From idea to production — Android, Flutter, React, and Next.js.';

/**
 * Shared SEO head tags. Google uses WebSite JSON-LD + og:site_name
 * for the site name shown in search (avoids defaulting to "Vercel").
 */
export default function SeoHead({
  title = `${SITE_NAME} — Web & Mobile Software`,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  noIndex = false,
}) {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;
  const ogImage = `${SITE_URL}/aru.jpeg`;

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: ['ARU Soft', 'AruSoft', 'arusoft.vercel.app'],
    url: `${SITE_URL}/`,
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/aru.png`,
    email: 'arusoft.company@gmail.com',
    sameAs: [],
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noIndex ? 'noindex,nofollow' : 'index,follow'}
      />
      <link rel="canonical" href={canonical} />
      <link rel="icon" href="/aru.png" type="image/png" />
      <link rel="apple-touch-icon" href="/aru.png" />
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="author" content={SITE_NAME} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      {path === '/' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      )}
    </Head>
  );
}
