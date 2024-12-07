import type { ImageSource } from '@/lib/types';

export enum SocialPlatform {
  LinkedIn = 'linkedin',
  Twitter = 'twitter',
}

export type SocialLink = {
  name: SocialPlatform;
  url: string;
};

export type Leader = {
  name: string;
  role: string;
  image: ImageSource;
  socialLinks: SocialLink[];
};
