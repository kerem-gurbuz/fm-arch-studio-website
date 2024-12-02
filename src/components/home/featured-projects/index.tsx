import Link from 'next/link';

import { ArrowIcon } from '@/components/common';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/config/navigation';
import { cn } from '@/lib/utils';
import { SECTION_ID } from './constants';
import { FeaturedProjectsGrid } from './featured-projects-grid';

export function FeaturedProjects() {
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
          <Button
            className={cn(
              'h-[72px] w-[169px] pb-[22px] pl-[37px] pr-[32px] pt-[25px]',
              'hidden items-center justify-between bg-very-dark-blue transition-colors duration-300 hover:bg-dark-grey md:inline-flex',
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
        {/* Featured Project Thumbnails */}
        <FeaturedProjectsGrid />
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
