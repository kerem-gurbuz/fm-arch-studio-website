import type { ProjectMap } from '@/lib/types';
import { generateImageConfig } from '@/lib/utils/project';
import { ProjectId } from './project-ids';
import { PROJECT_IMAGES } from './project-images';

/* 
      Project                                                 Status
  ------------------------------------------------------------------------
   1- Seraph Station..........................................[hero-slide]
   2- Eebox Building..........................................[-]
   3- Federal II Tower........................................[hero-slide]
   4- Project Del Sol.........................................[featured]
   5- 228B Tower..............................................[featured]
   6- Le Prototype............................................[featured]
   7- Grand Edelweiss Hotel...................................[-]
   8- Netcry Tower............................................[-]
   9- Hypers..................................................[-]
  10- SXIV Tower..............................................[-]
  11- Trinity Bank Tower......................................[hero-slide]
  12- Project Paramour........................................[hero-slide]
*/

export const PROJECTS: ProjectMap = {
  [ProjectId.SERAPH_STATION]: {
    id: ProjectId.SERAPH_STATION,
    title: 'Seraph Station',
    description:
      'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
    details: {
      client: 'Seraph Transit Authority',
      location: 'Downtown Metropolitan',
      architect: 'Jane Smith',
      completionDate: '2019-09-01',
      website: 'https://example.com/seraph-station',
    },
    projectCover: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.SERAPH_STATION],
      alt: 'A futuristic-looking tunnel with white walls, a curved ceiling, and bright, linear lights illuminating the path.',
    }),
    gallery: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    isFeatured: false,
  },
  [ProjectId.EEBOX_BUILDING]: {
    id: ProjectId.EEBOX_BUILDING,
    title: 'Eebox Building',
    description:
      "The Eebox Building is a modern architectural marvel, featuring a unique geometric design that pushes the boundaries of contemporary architecture while maintaining functionality. This innovative structure stands as a testament to the power of creative design and engineering prowess. The building's facade is composed of interlocking cubic forms, creating a visually striking appearance that changes throughout the day as light and shadows play across its surface. Inside, the Eebox Building offers flexible, open-plan spaces that cater to the evolving needs of modern businesses. Sustainability was a key consideration in the design process, with state-of-the-art energy management systems, rainwater harvesting, and extensive use of recycled materials. The result is a LEED Platinum certified building that not only looks extraordinary but also sets new standards for environmental responsibility in urban construction.",
    details: {
      client: 'Eebox Corporation',
      location: 'Business District',
      architect: 'Michael Johnson',
      completionDate: '2017-08-01',
      website: 'https://example.com/eebox-building',
    },
    projectCover: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.EEBOX_BUILDING],
      alt: 'Eebox Building',
    }),
    gallery: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    isFeatured: false,
  },
  [ProjectId.FEDERAL_II_TOWER]: {
    id: ProjectId.FEDERAL_II_TOWER,
    title: 'Federal II Tower',
    description:
      'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
    details: {
      client: 'Federal Real Estate Group',
      location: 'Central Business District',
      architect: 'Anna Lopez',
      completionDate: '2017-03-01',
      website: 'https://example.com/federal-ii-tower',
    },
    projectCover: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.FEDERAL_II_TOWER],
      alt: 'A low-angle view of a skyscraper with a repeating pattern of vertical lines, creating a sense of height and depth.',
    }),
    gallery: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    isFeatured: false,
  },
  [ProjectId.PROJECT_DEL_SOL]: {
    id: ProjectId.PROJECT_DEL_SOL,
    title: 'Project Del Sol',
    description:
      'Project Del Sol is a stunning example of modern resort architecture. The design emphasizes harmony with the natural surroundings, incorporating sweeping curves and expansive glass panels that open up to breathtaking views. Every detail, from the spacious interiors to the luxurious outdoor spaces, was meticulously planned to create an unforgettable experience for guests. The project also integrates cutting-edge sustainability features, such as solar panels, energy-efficient appliances, and a water recycling system, ensuring that luxury and environmental responsibility go hand in hand.',
    details: {
      client: 'Sol Resorts International',
      location: 'Coastal Paradise',
      architect: 'Carlos Rivera',
      completionDate: '2016-01-01',
      website: 'https://example.com/project-del-sol',
    },
    projectCover: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.PROJECT_DEL_SOL],
      alt: 'Project Del Sol',
    }),
    gallery: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    isFeatured: true,
  },
  [ProjectId.TOWER_228B]: {
    id: ProjectId.TOWER_228B,
    title: '228B Tower',
    description:
      'The 228B Tower stands as a beacon of innovation and elegance in the urban skyline. Its iconic silhouette and carefully crafted facade make it a visual masterpiece. Inside, the tower offers a mix of office and residential spaces, all designed to the highest standards of comfort and functionality. Sustainability is at the core of the project, with features such as green roofs, energy-efficient lighting, and a rainwater harvesting system. The 228B Tower is a symbol of progress and modernity.',
    details: {
      client: 'Skyline Enterprises',
      location: 'Financial Hub',
      architect: 'David Liu',
      completionDate: '2015-04-01',
      website: 'https://example.com/228b-tower',
    },
    projectCover: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.TOWER_228B],
      alt: '228B Tower',
    }),
    gallery: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    isFeatured: true,
  },
  [ProjectId.LE_PROTOTYPE]: {
    id: ProjectId.LE_PROTOTYPE,
    title: 'Le Prototype',
    description:
      'Le Prototype is a bold experiment in architectural innovation. This residential project explores the possibilities of modular construction, with a focus on creating customizable living spaces that adapt to the needs of their occupants. The minimalist design aesthetic is complemented by the use of eco-friendly materials and energy-efficient systems. Le Prototype is not just a building but a vision for the future of sustainable urban living.',
    details: {
      client: 'Visionary Developments',
      location: 'Urban Innovation District',
      architect: 'Elise Dupont',
      completionDate: '2015-10-01',
      website: 'https://example.com/le-prototype',
    },
    projectCover: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.LE_PROTOTYPE],
      alt: 'Le Prototype',
    }),
    gallery: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    isFeatured: true,
  },
  [ProjectId.GRAND_EDELWEISS_HOTEL]: {
    id: ProjectId.GRAND_EDELWEISS_HOTEL,
    title: 'Grand Edelweiss Hotel',
    description:
      'The Grand Edelweiss Hotel combines timeless luxury with modern elegance. Nestled in a picturesque location, the hotel features breathtaking architecture that harmonizes with its natural surroundings. The interiors boast opulent finishes, world-class amenities, and an ambiance of refined sophistication. This iconic project reflects our commitment to creating unforgettable guest experiences through design excellence and attention to detail.',
    details: {
      client: 'Edelweiss Hospitality Group',
      location: 'Mountain Retreat',
      architect: 'Sophia Laurent',
      completionDate: '2013-12-01',
      website: 'https://example.com/grand-edelweiss-hotel',
    },
    projectCover: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.GRAND_EDELWEISS_HOTEL],
      alt: 'Grand Edelweiss Hotel',
    }),
    gallery: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    isFeatured: false,
  },
  [ProjectId.NETCRY_TOWER]: {
    id: ProjectId.NETCRY_TOWER,
    title: 'Netcry Tower',
    description:
      'The Netcry Tower redefines the urban skyline with its innovative lattice-like facade. This design not only enhances the aesthetic appeal but also optimizes natural ventilation and light penetration. Inside, the tower offers state-of-the-art office spaces that cater to the demands of modern businesses. Sustainability is a key feature, with advanced energy systems and eco-friendly materials incorporated throughout the structure.',
    details: {
      client: 'Netcry Corporation',
      location: 'Technology Park',
      architect: 'Liam Carter',
      completionDate: '2012-08-01',
      website: 'https://example.com/netcry-tower',
    },
    projectCover: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.NETCRY_TOWER],
      alt: 'Netcry Tower',
    }),
    gallery: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    isFeatured: false,
  },
  [ProjectId.HYPERS]: {
    id: ProjectId.HYPERS,
    title: 'Hypers',
    description:
      'Hypers is an architectural statement that fuses bold design with functionality. Its striking red exterior and innovative structural elements make it a standout landmark. Designed to house cutting-edge research and development facilities, Hypers provides a dynamic environment that inspires innovation and collaboration. Sustainability was a guiding principle, resulting in a building that is both visually impressive and environmentally responsible.',
    details: {
      client: 'HyperTech Solutions',
      location: 'Innovation District',
      architect: 'Maya Tanaka',
      completionDate: '2012-01-01',
      website: 'https://example.com/hypers',
    },
    projectCover: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.HYPERS],
      alt: 'Hypers',
    }),
    gallery: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    isFeatured: false,
  },
  [ProjectId.SXIV_TOWER]: {
    id: ProjectId.SXIV_TOWER,
    title: 'SXIV Tower',
    description:
      'The SXIV Tower is a masterpiece of modern design, featuring an elegant curved facade that reflects the surrounding cityscape. This mixed-use development offers luxurious residential units, premium office spaces, and vibrant retail areas. Advanced building systems and smart technologies ensure energy efficiency and occupant comfort. The SXIV Tower represents a harmonious blend of beauty, functionality, and sustainability.',
    details: {
      client: 'Urban Living Group',
      location: 'City Center',
      architect: 'Ethan Moore',
      completionDate: '2011-03-01',
      website: 'https://example.com/sxiv-tower',
    },
    projectCover: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.SXIV_TOWER],
      alt: 'SXIV Tower',
    }),
    gallery: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    isFeatured: false,
  },
  [ProjectId.TRINITY_BANK_TOWER]: {
    id: ProjectId.TRINITY_BANK_TOWER,
    title: 'Trinity Bank Tower',
    description:
      'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
    details: {
      client: 'Trinity Bank Corporation',
      location: 'Financial District',
      architect: 'Olivia Zhang',
      completionDate: '2010-09-01',
      website: 'https://example.com/trinity-bank-tower',
    },
    projectCover: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.TRINITY_BANK_TOWER],
      alt: 'A dramatic low-angle view of a skyscraper with a curved, grid-like facade, illuminated against a dark sky.',
    }),
    gallery: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    isFeatured: false,
  },
  [ProjectId.PROJECT_PARAMOUR]: {
    id: ProjectId.PROJECT_PARAMOUR,
    title: 'Project Paramour',
    description:
      'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
    details: {
      client: 'Paramour Developments',
      location: 'Art District',
      architect: 'Lucas Meyer',
      completionDate: '2008-02-01',
      website: 'https://example.com/project-paramour',
    },
    projectCover: generateImageConfig({
      sources: PROJECT_IMAGES[ProjectId.PROJECT_PARAMOUR],
      alt: 'A modern skyscraper with a blue and white geometric pattern on its exterior, creating a sense of depth and dimension.',
    }),
    gallery: [
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
      '/assets/placeholder.svg',
    ],
    isFeatured: false,
  },
};
