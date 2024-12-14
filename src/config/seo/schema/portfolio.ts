import type { CollectionPage, WithContext } from 'schema-dts';

import { env } from '@/config/env';
import { PROJECTS } from '@/lib/constants/project';

export const portfolioJsonLd: WithContext<CollectionPage> = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Arch Studio Portfolio',
  description:
    "Explore Arch Studio's diverse portfolio of architectural projects, from modern skyscrapers to innovative public spaces.",
  url: `${env.SITE_URL}/portfolio`,
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      ...Object.values(PROJECTS).map(
        (project, index) =>
          ({
            '@type': 'ListItem',
            position: index + 1,
            name: project.title,
            url: project.details.website,
          }) as const,
      ),
    ],
  },
};
