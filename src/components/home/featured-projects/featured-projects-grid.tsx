import Link from 'next/link';

import { ArchButton, InfoMessage, ProjectCard } from '@/components/common';
import { ROUTES } from '@/config/navigation';
import { getFeaturedProjects } from '@/lib/utils/project';

export function FeaturedProjectsGrid() {
  const featuredProjects = getFeaturedProjects();
  if (featuredProjects.length === 0) {
    return (
      <InfoMessage
        type="info"
        title="No Featured Projects"
        message="There are currently no featured projects to display."
      />
    );
  }

  return (
    <div
      aria-label="Featured Projects Grid"
      className="grid gap-6 lg:grid-cols-3 lg:gap-[30px]"
    >
      {featuredProjects.map((project, index) => (
        <Link key={project.id} href="/portfolio">
          <ProjectCard index={index} project={project} />
        </Link>
      ))}
      <ArchButton
        text="See All"
        href={ROUTES.PORTFOLIO.href}
        className="inline-flex justify-center gap-6 pl-[106px] pr-[103px] md:hidden"
      />
    </div>
  );
}
