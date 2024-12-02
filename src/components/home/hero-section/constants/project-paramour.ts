/* -------------------------------------------------------------------------- */
/*                              Project Paramour                              */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types';
import type { HeroSlide } from '../types';

import imageSrcDesktop from '/public/assets/images/home/desktop/image-hero-paramour.jpg';
import imageSrcMobile from '/public/assets/images/home/mobile/image-hero-paramour.jpg';
import imageSrcTablet from '/public/assets/images/home/tablet/image-hero-paramour.jpg';

const imageAlt =
  'A modern skyscraper with a blue and white geometric pattern on its exterior, creating a sense of depth and dimension.';

const imageConfig: ImageSourceMap = {
  mobile: {
    src: imageSrcMobile,
    alt: imageAlt,
    wrapperClassName: 'block h-[560px] md:hidden',
    className: 'object-cover object-center',
    sizes: '(max-width: 768px) 100vw',
    quality: 100,
  },
  tablet: {
    src: imageSrcTablet,
    alt: imageAlt,
    wrapperClassName: 'hidden h-[720px] md:block lg:hidden',
    className: 'object-cover object-center',
    sizes: '(min-width: 768px) and (max-width: 1024px) 100vw',
    quality: 100,
  },
  desktop: {
    src: imageSrcDesktop,
    alt: imageAlt,
    wrapperClassName: 'hidden h-[720px] lg:block',
    className: 'object-cover object-center',
    sizes: '(min-width: 1024px) 100vw',
    quality: 100,
    priority: true, // ! High priority image, first in viewport
  },
};

export const PROJECT_PARAMOUR: HeroSlide = {
  id: 'project-paramour',
  title: 'Project Paramour',
  description:
    'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
  date: '2008-02-01T00:00:00.000Z', // February 2008
  imageConfig,
};
