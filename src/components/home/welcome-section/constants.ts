/* -------------------------------------------------------------------------- */
/*                               Welcome Section                              */
/* -------------------------------------------------------------------------- */

import type { ImageSource, ImageSourceMap } from '@/lib/types';

import welcomeImageSrcDesktop from '/public/assets/images/home/desktop/image-welcome.jpg';

import smallTeamImageSrcDesktop from '/public/assets/images/home/desktop/image-small-team.jpg';
import smallTeamImageSrcMobile from '/public/assets/images/home/mobile/image-small-team.jpg';
import smallTeamImageSrcTablet from '/public/assets/images/home/tablet/image-small-team.jpg';

const SECTION_ID = 'welcome-section';

/* 
  Welcome Image
  ------------------------------------------------------------------------
 */
const welcomeImageAlt =
  'A close-up of a modern building with a curved, white facade and horizontal lines, creating a sense of depth and dimension.';

const WELCOME_IMAGE_CONFIG: ImageSource = {
  src: welcomeImageSrcDesktop,
  alt: welcomeImageAlt,
  wrapperClassName: 'hidden h-[568px] w-[350px] lg:block',
  className: 'object-cover object-center',
  sizes: '350px',
  quality: 100,
};

/* 
  Small Team Image
  ------------------------------------------------------------------------
 */
const smallTeamImageAlt =
  'A low-angle view of a white, modern building with a geometric, lattice-like roof. The building is partially submerged in a body of water, creating a unique architectural design.';

const SMALL_TEAM_IMAGE_CONFIG: ImageSourceMap = {
  mobile: {
    src: smallTeamImageSrcMobile,
    alt: smallTeamImageAlt,
    wrapperClassName: 'block h-[560px] md:hidden',
    className: 'object-cover object-center',
    sizes: '(max-width: 768px) 100vw',
    quality: 100,
  },
  tablet: {
    src: smallTeamImageSrcTablet,
    alt: smallTeamImageAlt,
    wrapperClassName: 'hidden h-[560px] md:block lg:hidden',
    className: 'object-cover object-center',
    sizes: '(min-width: 768px) and (max-width: 1024px) 100vw',
    quality: 100,
  },
  desktop: {
    src: smallTeamImageSrcDesktop,
    alt: smallTeamImageAlt,
    wrapperClassName: 'hidden h-[560px] lg:block',
    className: 'object-cover object-center',
    sizes: '(min-width: 1024px) 100vw',
    quality: 100,
  },
};

export { SECTION_ID, SMALL_TEAM_IMAGE_CONFIG, WELCOME_IMAGE_CONFIG };
