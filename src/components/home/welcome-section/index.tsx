import { SECTION_ID } from './constants';
import { SmallTeam } from './small-team';
import { Welcome } from './welcome';

export function WelcomeSection() {
  return (
    <section
      id={SECTION_ID}
      aria-labelledby={`${SECTION_ID}-heading`}
      className="pb-[36.5px] pt-[36px] md:pb-[100px] md:pt-[44.5px] lg:pb-[100px] lg:pt-[54px]"
    >
      <Welcome className="container mb-[113px] md:mb-[233px] lg:mb-[200px]" />
      <SmallTeam className="md:container" />
    </section>
  );
}
