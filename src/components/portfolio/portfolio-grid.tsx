'use client';

import Link from 'next/link';
import { useMemo } from 'react';

import { InfoMessage, ProjectCard } from '@/components/common';
import type { Project } from '@/lib/types';
import { cn } from '@/lib/utils';
import { NUMBER_OF_PROJECTS } from './constants';

type PortfolioGridProps = {
  className?: string;
  projects: Project[];
};

export function PortfolioGrid({ className, projects }: PortfolioGridProps) {
  // Memoize sorted projects to prevent unnecessary re-renders
  const sortedProjects = useMemo(() => {
    return projects
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map((project, index) => ({
        ...project,
        imageConfig: {
          ...project.imageConfig,
          desktop: {
            ...project.imageConfig.desktop,
            priority: index < NUMBER_OF_PROJECTS,
          },
        },
      }));
  }, [projects]);

  // Render no projects message if array is empty
  if (projects.length === 0) {
    return (
      <InfoMessage
        type="info"
        title="No Projects Found"
        message="There are currently no projects to display."
      />
    );
  }

  return (
    <ul
      aria-label="Portfolio Grid"
      className={cn(
        'grid gap-6 lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-8',
        className,
      )}
    >
      {sortedProjects.map((project) => (
        <li key={project.id}>
          <Link
            aria-label={`View details for ${project.title}`}
            href="#" // TODO: Replace with the actual project link
          >
            <ProjectCard variant="all" project={project} />
          </Link>
        </li>
      ))}
    </ul>
  );
}