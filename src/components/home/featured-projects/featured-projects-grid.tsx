import Link from 'next/link';

import { ArchButton, InfoMessage, ProjectCard } from '@/components/common';
import { ROUTES } from '@/config/navigation';
import type { Project } from '@/lib/types';
import { cn } from '@/lib/utils';

type FeaturedProjectsGridProps = {
  className?: string;
  projects: Project[];
};

export function FeaturedProjectsGrid({
  className,
  projects,
}: FeaturedProjectsGridProps) {
  // Render no projects message if array is empty
  if (projects.length === 0) {
    return (
      <InfoMessage
        type="info"
        title="No Featured Projects"
        message="There are currently no featured projects to display."
      />
    );
  }

  return (
    <ul
      aria-label="Featured Projects Grid"
      className={cn('grid gap-6 lg:grid-cols-3 lg:gap-[30px]', className)}
    >
      {projects.map((project, index) => (
        <li key={project.id}>
          <Link href="/portfolio">
            <ProjectCard variant="featured" index={index} project={project} />
          </Link>
        </li>
      ))}
      <ArchButton
        text="See All"
        href={ROUTES.PORTFOLIO.href}
        className="inline-flex justify-center gap-6 pl-[106px] pr-[103px] md:hidden"
      />
    </ul>
  );
}
