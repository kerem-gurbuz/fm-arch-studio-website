import { DynamicImage } from '@/components/common';
import { cn } from '@/lib/utils';
import { HERO_IMAGE_CONFIG, SECTION_ID } from './constants';
import { ContactUs } from './contact-us';

export function HeroSection() {
  return (
    <section
      id={SECTION_ID}
      aria-labelledby={`${SECTION_ID}-heading`}
      className="pb-[50px] md:pb-[100px]"
    >
      <div className="md:container">
        <div className="relative">
          {/* Multi-Source Image */}
          <DynamicImage imageConfig={HERO_IMAGE_CONFIG} placeholder="blur" />
          {/* Image Overlay */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-[240px] w-full bg-black/35 md:h-[720px] lg:w-[635px]" />
          {/* Decorative Element (Mobile) */}
          <div className="pointer-events-none absolute left-0 right-[32px] top-[195px] z-20 h-[45px] bg-white sm:right-[calc(50%-(640px-2*32px)/2)] md:hidden" />
          {/* Decorative "Contact" Text */}
          <span
            className={cn(
              'pointer-events-none hidden md:inline-block',
              'absolute bottom-[316px] right-0 z-30 lg:bottom-[390px]',
              'font-spartan text-[120px] font-bold leading-[200px] tracking-[-3px] text-pale-sky xl:font-league-spartan xl:text-[250px] xl:tracking-[-5px]',
            )}
          >
            Contact
          </span>
          {/* Content */}
          <div className="md:absolute md:bottom-0 md:right-0 md:z-20">
            <ContactUs />
          </div>
        </div>
      </div>
    </section>
  );
}
