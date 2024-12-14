import type { StaticImageData } from 'next/image';

import type { ImageSourceMap, ImageSourceType } from '@/lib/types';

type GenerateImageConfigParams = {
  sources: { [key in ImageSourceType]: StaticImageData };
  alt: string;
};

export const generateImageConfig = ({
  sources,
  alt,
}: GenerateImageConfigParams): ImageSourceMap => ({
  mobile: {
    src: sources.mobile,
    alt,
    wrapperClassName: 'block h-[240px] md:hidden',
    className: 'object-cover object-center',
    sizes: '(max-width: 768px) 100vw',
    quality: 100,
  },
  tablet: {
    src: sources.tablet,
    alt,
    wrapperClassName: 'hidden h-[240px] md:block lg:hidden',
    className: 'object-cover object-center',
    sizes: '(min-width: 768px) and (max-width: 1024px) 100vw',
    quality: 100,
  },
  desktop: {
    src: sources.desktop,
    alt,
    wrapperClassName: 'hidden h-[560px] max-w-[350px] lg:block',
    className: 'object-cover object-center',
    sizes: '350px',
    quality: 100,
  },
});
