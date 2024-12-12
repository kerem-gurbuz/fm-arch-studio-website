'use client';

import Link from 'next/link';
import { useMemo } from 'react';

import { InfoMessage, ProjectCard } from '@/components/common';
import type { Project } from '@/lib/types';
import { cn } from '@/lib/utils';
import { NUMBER_OF_PROJECTS } from './constants';

type PortfolioGridProps = {
  projects: Project[];
  className?: string;
};

export function PortfolioGrid({ className, projects }: PortfolioGridProps) {
  // Memoize sorted projects to prevent unnecessary re-renders
  const sortedProjects = useMemo(() => {
    return projects
      .sort(
        (a, b) =>
          new Date(b.details.completionDate).getTime() -
          new Date(a.details.completionDate).getTime(),
      )
      .map((project, index) => ({
        ...project,
        projectCover: {
          ...project.projectCover,
          desktop: {
            ...project.projectCover.desktop,
            priority: index < NUMBER_OF_PROJECTS,
          },
        },
      }));
  }, [projects]);

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
        'grid grid-cols-[311px] justify-center gap-6 sm:grid-cols-[280px_280px] sm:gap-x-4 md:grid-cols-1 lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-8',
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
