import { LEADERS, SECTION_ID } from './constants';
import { LeadersGrid } from './leaders-grid';

export function LeadersSection() {
  return (
    <section
      id={SECTION_ID}
      aria-labelledby={`${SECTION_ID}-heading`}
      className="pb-[111px] pt-[56px] md:pb-[239px] md:pt-[115.5px] lg:pb-[159px] lg:pt-[100px]"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-[55px] md:gap-[49px] lg:grid-cols-[1fr_350px] lg:gap-[34px] xl:grid-cols-[1fr_730px] xl:gap-[125px]">
          <h2 id={`${SECTION_ID}-heading`} className="heading-md">
            The <br /> Leaders
          </h2>
          <LeadersGrid leaders={LEADERS} />
        </div>
      </div>
    </section>
  );
}
