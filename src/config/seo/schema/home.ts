import type { Organization, WithContext } from 'schema-dts';

import { env } from '@/config/env';

export const homeJsonLd: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Arch Studio',
  url: env.SITE_URL,
  logo: `${env.SITE_URL}/assets/seo/logo.png`,
  sameAs: [
    'https://www.facebook.com/archstudio',
    'https://www.twitter.com/archstudio',
    'https://www.linkedin.com/company/archstudio',
  ],
  description:
    'Arch Studio is a leading architecture firm specializing in modern, sustainable design. From stations to high-rise buildings, we create spaces that inspire and delight.',
};
