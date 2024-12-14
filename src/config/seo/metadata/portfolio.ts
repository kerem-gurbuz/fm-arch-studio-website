import { Metadata } from 'next';

import { env } from '@/config/env';

export const portfolioMetadata: Metadata = {
  title: 'Our Portfolio | Arch Studio',
  description:
    "Explore Arch Studio's diverse portfolio of architectural projects, from modern skyscrapers to innovative public spaces. See how we've shaped skylines and communities.",
  openGraph: {
    title: 'Our Portfolio | Arch Studio',
    description:
      "Explore Arch Studio's diverse portfolio of architectural projects, from modern skyscrapers to innovative public spaces.",
    url: `${env.SITE_URL}/portfolio`,
    images: [
      {
        url: '/assets/seo/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Arch Studio Portfolio Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Portfolio | Arch Studio',
    description:
      "Explore Arch Studio's diverse portfolio of architectural projects, from modern skyscrapers to innovative public spaces.",
    images: ['/assets/seo/twitter-image.png'],
  },
};
