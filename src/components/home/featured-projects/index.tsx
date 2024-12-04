import { ArchButton } from '@/components/common';
import { ROUTES } from '@/config/navigation';
import { getFeaturedProjects } from '@/lib/utils/project';
import { SECTION_ID } from './constants';
import { FeaturedProjectsGrid } from './featured-projects-grid';

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section
      id={SECTION_ID}
      aria-labelledby={`${SECTION_ID}-heading`}
      className="pb-[72px] pt-[36.5px] md:pb-[200px] md:pt-[100px]"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-[43px] flex items-end justify-between md:mb-[85px] lg:mb-[64px]">
          <h2 id={`${SECTION_ID}-heading`} className="heading-md">
            Featured
          </h2>
          <ArchButton
            text="See All"
            href={ROUTES.PORTFOLIO.href}
            className="hidden w-[169px] pl-[35px] pr-[32px] md:inline-flex"
          />
        </div>
        {/* Featured Project Thumbnails */}
        <FeaturedProjectsGrid projects={featuredProjects} />
      </div>
    </section>
  );
}

/* 
  Note: Expected Behaviour
  ------------------------------------------------------------------------
  - Home: When one of the 3 Featured projects near the bottom are clicked, navigate to the `/portfolio` page.

  - Portfolio: The thumbnails on the `/portfolio` index page should be anchor tags but should not link anywhere. If this were a real site, these could link to the project websites individually.
 */
