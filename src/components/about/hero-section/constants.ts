/* -------------------------------------------------------------------------- */
/*                                Hero Section                                */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types';

import heroImageSrcDesktop from '/public/assets/images/about/desktop/image-hero.jpg';
import heroImageSrcMobile from '/public/assets/images/about/mobile/image-hero.jpg';
import heroImageSrcTablet from '/public/assets/images/about/tablet/image-hero.jpg';

const SECTION_ID = 'about-hero-section';

const heroImageAlt =
  'An architect working on a design project, using a laptop and blueprints.';

const HERO_IMAGE_CONFIG: ImageSourceMap = {
  mobile: {
    src: heroImageSrcMobile,
    alt: heroImageAlt,
    wrapperClassName: 'block h-[240px] md:hidden',
    className: 'object-cover object-center',
    sizes: '(max-width: 768px) 100vw',
    quality: 100,
  },
  tablet: {
    src: heroImageSrcTablet,
    alt: heroImageAlt,
    wrapperClassName: 'hidden h-[720px] md:block lg:hidden',
    className: 'object-cover object-center',
    sizes: '(min-width: 768px) and (max-width: 1024px) 100vw',
    quality: 100,
  },
  desktop: {
    src: heroImageSrcDesktop,
    alt: heroImageAlt,
    wrapperClassName: 'hidden h-[720px] w-[635px] lg:block',
    className: 'object-cover object-center',
    sizes: '635px',
    quality: 100,
    priority: true, // ! High priority image, first in viewport
  },
};

export { HERO_IMAGE_CONFIG, SECTION_ID };
