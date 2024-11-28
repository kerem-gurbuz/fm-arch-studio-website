import type { ImageSourceMap } from '@/lib/types';

export type HeroSlide = {
  id: string;
  title: string;
  description: string;
  date: string;
  imageConfig: ImageSourceMap;
};
