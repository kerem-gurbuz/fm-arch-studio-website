import { Metadata } from 'next';

import { env } from '@/config/env';

export const homeMetadata: Metadata = {
  title: 'Arch Studio | Award-Winning Architecture Firm',
  description:
    'Arch Studio is a leading architecture firm specializing in modern, sustainable design. From stations to high-rise buildings, we create spaces that inspire and delight.',
  openGraph: {
    title: 'Arch Studio | Award-Winning Architecture Firm',
    description:
      'Arch Studio is a leading architecture firm specializing in modern, sustainable design. From stations to high-rise buildings, we create spaces that inspire and delight.',
    url: env.SITE_URL,
    siteName: 'Arch Studio',
    images: [
      {
        url: '/assets/seo/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Arch Studio - Modern Architectural Design',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arch Studio | Award-Winning Architecture Firm',
    description:
      'Arch Studio is a leading architecture firm specializing in modern, sustainable design. From stations to high-rise buildings, we create spaces that inspire and delight.',
    images: ['/assets/seo/twitter-image.png'],
    creator: '@ArchStudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: env.SITE_URL,
  },
  creator: 'Kerem GURBUZ',
  authors: [
    {
      name: 'Kerem GURBUZ',
      url: 'https://www.linkedin.com/in/gurbuz-kerem/',
    },
  ],
};
