import Link from 'next/link';

import { ArrowIcon, ProjectCard } from '@/components/common';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/config/navigation';
import { cn } from '@/lib/utils';
import { getFeaturedProjects } from '@/lib/utils/project';

export function FeaturedProjectsGrid() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div
      aria-label="Featured Projects Grid"
      className="grid gap-6 lg:grid-cols-3 lg:gap-[30px]"
    >
      {featuredProjects.length > 0
        ? featuredProjects.map((project, index) => (
            <Link key={project.id} href="/portfolio">
              <ProjectCard index={index} project={project} />
            </Link>
          ))
        : null}
      <Button
        className={cn(
          'h-[72px] w-full pb-[22px] pl-[37px] pr-[32px] pt-[25px]',
          'inline-flex items-center justify-center gap-6 bg-very-dark-blue transition-colors duration-300 hover:bg-dark-grey md:hidden',
        )}
        asChild
      >
        <Link href={ROUTES.PORTFOLIO.href}>
          <span className="text-[18px] font-bold leading-[25px] text-white">
            See All
          </span>
          <ArrowIcon className="h-[18px] w-[24px] stroke-white" />
          <span className="sr-only">View All Projects</span>
        </Link>
      </Button>
    </div>
  );
}
