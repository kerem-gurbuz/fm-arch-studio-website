import type { ProjectMap } from '@/lib/types';
import { generateImageConfig } from '@/lib/utils/project';
import { ProjectId } from './project-ids';
import { PROJECT_IMAGES } from './project-images';

export const PROJECTS: ProjectMap = {
  [ProjectId.SERAPH_STATION]: {
    id: ProjectId.SERAPH_STATION,
    title: 'Seraph Station',
    description:
      'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
    imageConfig: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.SERAPH_STATION],
      alt: 'A futuristic-looking tunnel with white walls, a curved ceiling, and bright, linear lights illuminating the path.',
    }),
    date: '2019-09-01',
    slug: `/projects/${ProjectId.SERAPH_STATION}`,
    isFeatured: false,
  },
  [ProjectId.EEBOX_BUILDING]: {
    id: ProjectId.EEBOX_BUILDING,
    title: 'Eebox Building',
    imageConfig: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.EEBOX_BUILDING],
      alt: 'Eebox Building',
    }),
    date: '2017-08-01',
    slug: `/projects/${ProjectId.EEBOX_BUILDING}`,
    isFeatured: false,
  },
  [ProjectId.FEDERAL_II_TOWER]: {
    id: ProjectId.FEDERAL_II_TOWER,
    title: 'Federal II Tower',
    description:
      'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
    imageConfig: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.FEDERAL_II_TOWER],
      alt: 'A low-angle view of a skyscraper with a repeating pattern of vertical lines, creating a sense of height and depth.',
    }),
    date: '2017-03-01',
    slug: `/projects/${ProjectId.FEDERAL_II_TOWER}`,
    isFeatured: false,
  },
  [ProjectId.PROJECT_DEL_SOL]: {
    id: ProjectId.PROJECT_DEL_SOL,
    title: 'Project Del Sol',
    imageConfig: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.PROJECT_DEL_SOL],
      alt: 'Project Del Sol',
    }),
    date: '2016-01-01',
    slug: `/projects/${ProjectId.PROJECT_DEL_SOL}`,
    isFeatured: true,
  },
  [ProjectId.TOWER_228B]: {
    id: ProjectId.TOWER_228B,
    title: '228B Tower',
    imageConfig: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.TOWER_228B],
      alt: '228B Tower',
    }),
    date: '2015-04-01',
    slug: `/projects/${ProjectId.TOWER_228B}`,
    isFeatured: true,
  },
  [ProjectId.LE_PROTOTYPE]: {
    id: ProjectId.LE_PROTOTYPE,
    title: 'Le Prototype',
    imageConfig: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.LE_PROTOTYPE],
      alt: 'Le Prototype',
    }),
    date: '2015-10-01',
    slug: `/projects/${ProjectId.LE_PROTOTYPE}`,
    isFeatured: true,
  },
  [ProjectId.GRAND_EDELWEISS_HOTEL]: {
    id: ProjectId.GRAND_EDELWEISS_HOTEL,
    title: 'Grand Edelweiss Hotel',
    imageConfig: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.GRAND_EDELWEISS_HOTEL],
      alt: 'Grand Edelweiss Hotel',
    }),
    date: '2013-12-01',
    slug: `/projects/${ProjectId.GRAND_EDELWEISS_HOTEL}`,
    isFeatured: false,
  },
  [ProjectId.NETCRY_TOWER]: {
    id: ProjectId.NETCRY_TOWER,
    title: 'Netcry Tower',
    imageConfig: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.NETCRY_TOWER],
      alt: 'Netcry Tower',
    }),
    date: '2012-08-01',
    slug: `/projects/${ProjectId.NETCRY_TOWER}`,
    isFeatured: false,
  },
  [ProjectId.HYPERS]: {
    id: ProjectId.HYPERS,
    title: 'Hypers',
    imageConfig: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.HYPERS],
      alt: 'Hypers',
    }),
    date: '2012-01-01',
    slug: `/projects/${ProjectId.HYPERS}`,
    isFeatured: false,
  },
  [ProjectId.SXIV_TOWER]: {
    id: ProjectId.SXIV_TOWER,
    title: 'SXIV Tower',
    imageConfig: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.SXIV_TOWER],
      alt: 'SXIV Tower',
    }),
    date: '2011-03-01',
    slug: `/projects/${ProjectId.SXIV_TOWER}`,
    isFeatured: false,
  },
  [ProjectId.TRINITY_BANK_TOWER]: {
    id: ProjectId.TRINITY_BANK_TOWER,
    title: 'Trinity Bank Tower',
    description:
      'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
    imageConfig: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.TRINITY_BANK_TOWER],
      alt: 'A dramatic low-angle view of a skyscraper with a curved, grid-like facade, illuminated against a dark sky.',
    }),
    date: '2010-09-01',
    slug: `/projects/${ProjectId.TRINITY_BANK_TOWER}`,
    isFeatured: false,
  },
  [ProjectId.PROJECT_PARAMOUR]: {
    id: ProjectId.PROJECT_PARAMOUR,
    title: 'Project Paramour',
    description:
      'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
    imageConfig: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.PROJECT_PARAMOUR],
      alt: 'A modern skyscraper with a blue and white geometric pattern on its exterior, creating a sense of depth and dimension.',
    }),
    date: '2008-02-01',
    slug: `/projects/${ProjectId.PROJECT_PARAMOUR}`,
    isFeatured: false,
  },
};
