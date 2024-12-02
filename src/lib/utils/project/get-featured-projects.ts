import { PROJECTS } from '@/lib/constants/project';
import type { Project } from '@/lib/types';

export const getFeaturedProjects = (): Project[] => {
  return Object.values(PROJECTS).filter((project) => project.isFeatured);
};
