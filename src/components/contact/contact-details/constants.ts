/* -------------------------------------------------------------------------- */
/*                               Contact Details                              */
/* -------------------------------------------------------------------------- */

import type { Office } from './types';

export const SECTION_ID = 'contact-details';

export const OFFICES: Office[] = [
  {
    id: 'main-office',
    name: 'Main Office',
    email: 'archone@mail.com',
    address: '1892 Chenoweth Drive TN',
    phone: '123-456-3451',
    location: {
      lat: 35.96051,
      lng: -83.9194,
    },
  },
  {
    id: 'office-ii',
    name: 'Office II',
    email: 'archtwo@mail.com',
    address: '3399 Wines Lane TX',
    phone: '832-123-4321',
    location: {
      lat: 32.78172,
      lng: -96.79414,
    },
  },
];
