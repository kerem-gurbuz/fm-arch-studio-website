import { cn } from '@/lib/utils';
import { SECTION_ID } from './constants';

export function ContactUs() {
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
        Tell us about <br /> your project
      </h1>
      <p className="body-text text-dark-grey">
        We&apos;d love to hear more about your project. Please, leave a message
        below or give us a call. We have two offices, one in Texas and one in
        Tennessee. If you find yourself nearby, come say hello!
      </p>
    </article>
  );
}
