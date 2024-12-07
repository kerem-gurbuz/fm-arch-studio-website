import { cn } from '@/lib/utils';
import { SECTION_ID } from './constants';

export function TeamIntro() {
  return (
    <article
      aria-labelledby={`${SECTION_ID}-heading`}
      className={cn(
        'pt-[20px] md:pb-[2px] md:pt-[162px] lg:pt-[218px]',
        'container relative bg-white md:mx-0 md:max-w-[515px] md:px-0 md:pl-[60px] lg:max-w-[628px] lg:pl-[183px]',
      )}
    >
      {/* Decorative Divider Line */}
      <div
        className={cn(
          'pointer-events-none absolute hidden bg-light-grey md:inline-block',
          'left-[60px] top-[88px] h-[1px] w-[65px]',
          'lg:left-[183px] lg:top-[160px]',
        )}
      />
      {/*  Title & Description  */}
      <h1
        id={`${SECTION_ID}-heading`}
        className="heading-md mb-[21px] tracking-[-1.2px] md:mb-[43px] md:tracking-[-2px] lg:mb-[59px]"
      >
        Your team of <br /> professionals
      </h1>
      <p className="body-text text-dark-grey">
        Our small team of world-class professionals will work with you every
        step of the way. Strong relationships are at the core of everything we
        do. This extends to the relationship our projects have with their
        surroundings.
      </p>
    </article>
  );
}
