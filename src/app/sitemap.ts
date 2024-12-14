import type { MetadataRoute } from 'next';

import { env } from '@/config/env';

type Languages<T> = {
  [key: string]: T;
};

type Sitemap = Array<{
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never';
  priority?: number;
  alternates?: {
    languages?: Languages<string>;
  };
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.SITE_URL;
  const currentDate = new Date();

  const staticRoutes: Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'yearly', // This should be set to 'weekly' or 'monthly'
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'yearly', // This should be set to 'monthly'
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];

  const dynamicRoutes: Sitemap = [
    // Add dynamic routes here
  ];

  return [...staticRoutes, ...dynamicRoutes];
}
