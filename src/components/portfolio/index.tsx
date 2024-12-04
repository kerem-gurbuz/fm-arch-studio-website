import { PROJECTS } from '@/lib/constants/project';
import { SECTION_ID } from './constants';
import { PortfolioGrid } from './portfolio-grid';

export function Portfolio() {
  const projects = Object.values(PROJECTS);

  return (
    <section
      id={SECTION_ID}
      aria-label="Portfolio"
      className="pb-[72px] pt-[56px] md:pb-[200px] md:pt-0 lg:pb-[160px]"
    >
      <div className="container">
        <PortfolioGrid projects={projects} />
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
