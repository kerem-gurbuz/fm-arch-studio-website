/* -------------------------------------------------------------------------- */
/*                               Leaders Section                              */
/* -------------------------------------------------------------------------- */

import type { ImageSource } from '@/lib/types';
import { SocialPlatform, type Leader, type SocialLink } from './types';

import jacksonRourkeImageSrc from '/public/assets/images/about/desktop/avatar-jackson.jpg';
import jakeRichardsImageSrc from '/public/assets/images/about/desktop/avatar-jake.jpg';
import mariaSimpsonImageSrc from '/public/assets/images/about/desktop/avatar-maria.jpg';
import thompsonSmithImageSrc from '/public/assets/images/about/desktop/avatar-thompson.jpg';

const SECTION_ID = 'leaders-section';

const DEFAULT_IMAGE_CONFIG: Pick<
  ImageSource,
  'wrapperClassName' | 'className' | 'sizes' | 'quality'
> = {
  wrapperClassName: 'h-[284px] sm:h-[256px] lg:h-[320px]',
  className: 'object-cover object-center',
  sizes: '(max-width: 640px) 311px, (max-width: 1024px) 280px, 350px',
  quality: 100,
};

// TODO: Replace with actual links
const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  {
    name: SocialPlatform.LinkedIn,
    url: 'https://www.linkedin.com',
  },
  {
    name: SocialPlatform.Twitter,
    url: 'https://twitter.com',
  },
];

const LEADERS: Leader[] = [
  {
    name: 'Jake Richards',
    role: 'Chief Architect',
    image: {
      src: jakeRichardsImageSrc,
      alt: 'Jake Richards, Chief Architect',
      ...DEFAULT_IMAGE_CONFIG,
    },
    socialLinks: DEFAULT_SOCIAL_LINKS,
  },
  {
    name: 'Thompson Smith',
    role: 'Head of Finance',
    image: {
      src: thompsonSmithImageSrc,
      alt: 'Thompson Smith, Head of Finance',
      ...DEFAULT_IMAGE_CONFIG,
    },
    socialLinks: DEFAULT_SOCIAL_LINKS,
  },
  {
    name: 'Jackson Rourke',
    role: 'Lead Designer',
    image: {
      src: jacksonRourkeImageSrc,
      alt: 'Jackson Rourke, Lead Designer',
      ...DEFAULT_IMAGE_CONFIG,
    },
    socialLinks: DEFAULT_SOCIAL_LINKS,
  },
  {
    name: 'Maria Simpson',
    role: 'Senior Architect',
    image: {
      src: mariaSimpsonImageSrc,
      alt: 'Maria Simpson, Senior Architect',
      ...DEFAULT_IMAGE_CONFIG,
    },
    socialLinks: DEFAULT_SOCIAL_LINKS,
  },
];

export { LEADERS, SECTION_ID };
