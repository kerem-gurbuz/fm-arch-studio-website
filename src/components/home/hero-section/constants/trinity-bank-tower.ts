/* -------------------------------------------------------------------------- */
/*                             Trinity Bank Tower                             */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types';
import type { HeroSlide } from '../types';

import imageSrcDesktop from '/public/assets/images/home/desktop/image-hero-trinity.jpg';
import imageSrcMobile from '/public/assets/images/home/mobile/image-hero-trinity.jpg';
import imageSrcTablet from '/public/assets/images/home/tablet/image-hero-trinity.jpg';

const imageAlt =
  'A dramatic low-angle view of a skyscraper with a curved, grid-like facade, illuminated against a dark sky.';

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

export const TRINITY_BANK_TOWER: HeroSlide = {
  id: 'trinity-bank-tower',
  title: 'Trinity Bank Tower',
  description:
    'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
  date: '2010-09-01T00:00:00.000Z', // September 2010
  imageConfig,
};
