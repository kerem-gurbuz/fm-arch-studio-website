import { Metadata } from 'next';

import { env } from '@/config/env';

export const contactMetadata: Metadata = {
  title: 'Contact Us | Arch Studio',
  description:
    "Get in touch with Arch Studio. We'd love to hear about your project. We have two offices, one in Texas and one in Tennessee.",
  openGraph: {
    title: 'Contact Us | Arch Studio',
    description:
      "Get in touch with Arch Studio. We'd love to hear about your project. We have two offices, one in Texas and one in Tennessee.",
    url: `${env.SITE_URL}/contact`,
    images: [
      {
        url: '/assets/seo/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Arch Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Arch Studio',
    description:
      "Get in touch with Arch Studio. We'd love to hear about your project. We have two offices, one in Texas and one in Tennessee.",
    images: ['/assets/seo/twitter-image.png'],
  },
};
