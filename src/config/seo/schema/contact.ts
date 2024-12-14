import type { ContactPage, WithContext } from 'schema-dts';

import { env } from '@/config/env';

export const contactJsonLd: WithContext<ContactPage> = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Arch Studio',
  description:
    "Get in touch with Arch Studio. We'd love to hear about your project. We have two offices, one in Texas and one in Tennessee.",
  url: `${env.SITE_URL}/contact`,
  mainEntity: {
    '@type': 'Organization',
    name: 'Arch Studio',
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Texas',
        addressRegion: 'TX',
        postalCode: '75001',
        streetAddress: '1892 Chenoweth Drive',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Tennessee',
        addressRegion: 'TN',
        postalCode: '37932',
        streetAddress: '3399 Wines Lane',
      },
    ],
    email: 'contact@archstudio.com',
    telephone: ['+1 123-456-3451', '+1 832-123-4321'],
  },
};
