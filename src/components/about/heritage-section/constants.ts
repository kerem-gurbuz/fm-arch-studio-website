/* -------------------------------------------------------------------------- */
/*                              Heritage Section                              */
/* -------------------------------------------------------------------------- */

import type { ImageSource } from '@/lib/types';

import heritageImageSrcDesktop from '/public/assets/images/about/desktop/image-heritage.jpg';

const SECTION_ID = 'heritage-section';

const heritageImageAlt =
  'A close-up of a modern building with a curved facade and many windows, creating a repeating pattern.';

const HERITAGE_IMAGE_CONFIG: ImageSource = {
  src: heritageImageSrcDesktop,
  alt: heritageImageAlt,
  wrapperClassName: 'hidden h-[568px] max-w-[540px] lg:block',
  className: 'object-cover object-center',
  sizes: '540px',
  quality: 100,
};

export { HERITAGE_IMAGE_CONFIG, SECTION_ID };
