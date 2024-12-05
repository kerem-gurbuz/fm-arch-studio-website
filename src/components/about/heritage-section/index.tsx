import { SECTION_ID } from './constants';
import { Heritage } from './heritage';

export function HeritageSection() {
  return (
    <section
      id={SECTION_ID}
      aria-labelledby={`${SECTION_ID}-heading`}
      className="pb-14 pt-[38px] md:pb-[115.5px] md:pt-[100px] lg:py-[100px]"
    >
      <div className="container">
        <Heritage />
      </div>
    </section>
  );
}
