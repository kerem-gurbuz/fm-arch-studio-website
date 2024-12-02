/* -------------------------------------------------------------------------- */
/*                               Seraph Station                               */
/* -------------------------------------------------------------------------- */

import type { ImageSourceMap } from '@/lib/types';
import type { HeroSlide } from '../types';

import imageSrcDesktop from '/public/assets/images/home/desktop/image-hero-seraph.jpg';
import imageSrcMobile from '/public/assets/images/home/mobile/image-hero-seraph.jpg';
import imageSrcTablet from '/public/assets/images/home/tablet/image-hero-seraph.jpg';

const imageAlt =
  'A futuristic-looking tunnel with white walls, a curved ceiling, and bright, linear lights illuminating the path.';

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

export const SERAPH_STATION: HeroSlide = {
  id: 'seraph-station',
  title: 'Seraph Station',
  description:
    'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
  date: '2019-09-01T00:00:00.000Z', // September 2019
  imageConfig,
};
