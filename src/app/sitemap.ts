import type { MetadataRoute } from 'next';

import { env } from '@/config/env';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.SITE_URL;
  const currentDate = new Date();

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
    },
  ];

  return staticRoutes;
}
