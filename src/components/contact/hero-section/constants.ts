/* -------------------------------------------------------------------------- */
/*                                Hero Section                                */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types';

import heroImageSrcDesktop from '/public/assets/images/contact/desktop/image-hero.jpg';
import heroImageSrcMobile from '/public/assets/images/contact/mobile/image-hero.jpg';
import heroImageSrcTablet from '/public/assets/images/contact/tablet/image-hero.jpg';

const SECTION_ID = 'contact-hero-section';

const heroImageAlt =
  "A vintage black rotary phone with a dial and buttons labeled 'Reception' and 'Room Service'.";

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
