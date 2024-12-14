import type { AboutPage, WithContext } from 'schema-dts';

import { env } from '@/config/env';

export const aboutJsonLd: WithContext<AboutPage> = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Arch Studio',
  description:
    "Learn about Arch Studio's team of world-class professionals. Our small team delivers big ideas, creating exceptional structures in harmony with their surroundings.",
  url: `${env.SITE_URL}/about`,
  mainEntity: {
    '@type': 'Organization',
    name: 'Arch Studio',
    foundingDate: '2007',
    description:
      'Founded in 2007, Arch Studio is a boutique architecture firm specializing in Urban Design and creating exceptional structures that live in harmony with their surroundings.',
    employee: [
      {
        '@type': 'Person',
        name: 'Jake Richards',
        jobTitle: 'Chief Architect',
        image: `${env.SITE_URL}/assets/images/about/desktop/avatar-jake.jpg`,
      },
      {
        '@type': 'Person',
        name: 'Thompson Smith',
        jobTitle: 'Head of Finance',
        image: `${env.SITE_URL}/assets/images/about/desktop/avatar-thompson.jpg`,
      },
      {
        '@type': 'Person',
        name: 'Jackson Rourke',
        jobTitle: 'Lead Designer',
        image: `${env.SITE_URL}/assets/images/about/desktop/avatar-jackson.jpg`,
      },
      {
        '@type': 'Person',
        name: 'Maria Simpson',
        jobTitle: 'Senior Architect',
        image: `${env.SITE_URL}/assets/images/about/desktop/avatar-maria.jpg`,
      },
    ],
  },
};
