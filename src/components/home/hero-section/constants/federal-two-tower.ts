/* -------------------------------------------------------------------------- */
/*                              Federal II Tower                              */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types';
import type { HeroSlide } from '../types';

import imageSrcDesktop from '/public/assets/images/home/desktop/image-hero-federal.jpg';
import imageSrcMobile from '/public/assets/images/home/mobile/image-hero-federal.jpg';
import imageSrcTablet from '/public/assets/images/home/tablet/image-hero-federal.jpg';

const imageAlt =
  'A low-angle view of a skyscraper with a repeating pattern of vertical lines, creating a sense of height and depth.';

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
  },
};

export const FEDERAL_TWO_TOWER: HeroSlide = {
  id: 'federal-two-tower',
  title: 'Federal II Tower',
  description:
    'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
  date: '2017-03-01T00:00:00.000Z', // March 2017
  imageConfig,
};
