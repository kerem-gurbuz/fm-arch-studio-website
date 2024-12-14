import { Metadata } from 'next';

export const aboutMetadata: Metadata = {
  title: 'About Us | Arch Studio',
  description:
    "Learn about Arch Studio's team of world-class professionals. Our small team delivers big ideas, creating exceptional structures in harmony with their surroundings.",
  openGraph: {
    title: 'About Us | Arch Studio',
    description:
      "Learn about Arch Studio's team of world-class professionals. Our small team delivers big ideas, creating exceptional structures.",
    url: '/about',
    images: [
      {
        url: '/assets/seo/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Arch Studio Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Arch Studio',
    description:
      "Learn about Arch Studio's team of world-class professionals. Our small team delivers big ideas, creating exceptional structures.",
    images: ['/assets/seo/twitter-image.png'],
  },
};
