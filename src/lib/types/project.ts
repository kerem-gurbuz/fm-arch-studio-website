import type { StaticImageData } from 'next/image';

import type { ProjectId } from '@/lib/constants/project';
import type { ImageSourceMap, ImageSourceType } from '@/lib/types';

type Project = {
  id: string;
  title: string;
  description: string;
  details: {
    client: string;
    location: string;
    architect: string;
    completionDate: string;
    website: string;
  };
  projectCover: ImageSourceMap;
  gallery: string[];
  isFeatured: boolean;
};

type ProjectImageMap = Record<
  ProjectId,
  { [key in ImageSourceType]: StaticImageData }
>;

type ProjectMap = Record<ProjectId, Project>;

export type { Project, ProjectImageMap, ProjectMap };
