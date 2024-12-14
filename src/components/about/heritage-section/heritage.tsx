import { ResponsiveImage } from '@/components/common';
import { HERITAGE_IMAGE_CONFIG, SECTION_ID } from './constants';

export function Heritage() {
  return (
    <article
      aria-labelledby={`${SECTION_ID}-heading`}
      className="grid grid-cols-1 lg:grid-cols-[445px_1fr] lg:justify-between lg:gap-[34px] xl:gap-[125px]"
    >
      {/* Left Side */}
      <div>
        {/* Decorative Divider Line */}
        <div className="mb-[68px] h-[1px] w-[65px] bg-light-grey md:mb-[49px] lg:mb-[82px]" />
        {/* Title & Description */}
        <h2
          id={`${SECTION_ID}-heading`}
          className="heading-md mb-[22px] md:mb-[67px] lg:mb-[59px]"
        >
          Our <br /> Heritage
        </h2>
        <div className="body-text space-y-6 text-dark-grey">
          <p>
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
          </p>
          <p>
            Specializing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.
          </p>
          <p>
            Our small team of world-class professionals provides input on every
            project.
          </p>
        </div>
      </div>
      {/* Right Side */}
      <ResponsiveImage imageSource={HERITAGE_IMAGE_CONFIG} placeholder="blur" />
    </article>
  );
}
