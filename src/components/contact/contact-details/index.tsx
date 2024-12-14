'use client';

import { useRef } from 'react';

import { useScrollIntoView } from '@/lib/hooks';
import { OFFICES, SECTION_ID } from './constants';
import { GoogleMap } from './google-map';
import { OfficeCard } from './office-card';

export function ContactDetails() {
  const scrollToRef = useScrollIntoView();
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id={SECTION_ID}
      aria-labelledby={`${SECTION_ID}-heading`}
      className="pb-[36.5px] pt-[50px] md:py-[100px] lg:pb-[79.5px]"
    >
      {/* Contact Details */}
      <div className="container pb-[35.5px] md:pb-[113px] lg:pb-[99.5px]">
        {/* Decorative Divider Line */}
        <div className="mb-[68px] h-[1px] w-[65px] bg-light-grey md:mb-[49px] lg:mb-[73px]" />
        {/* Title & Offices */}
        <div className="grid grid-cols-1 gap-y-[40px] md:gap-y-[42px] lg:grid-cols-[350px_1fr] lg:gap-x-[30px]">
          <h2 id={`${SECTION_ID}-heading`} className="heading-md">
            Contact <br /> Details
          </h2>
          <div className="flex flex-col gap-y-10 md:gap-y-[43px] lg:flex-row lg:gap-x-[30px]">
            {OFFICES.map((office) => (
              <OfficeCard
                key={office.id}
                office={office}
                onViewMap={() => scrollToRef(targetRef)}
                className="flex-1"
              />
            ))}
          </div>
        </div>
      </div>
      {/* Map Container */}
      <div
        ref={targetRef}
        className="pt-[35.5px] md:container md:pt-[113px] lg:pt-[99.5px]"
      >
        <GoogleMap className="h-[367px] md:h-[560px]" />
      </div>
    </section>
  );
}
