import { ResponsiveImage } from '@/components/common';
import { cn } from '@/lib/utils';
import { SECTION_ID, WELCOME_IMAGE_CONFIG } from './constants';

type WelcomeProps = {
  className?: string;
};

export function Welcome({ className }: WelcomeProps) {
  return (
    <div className={className}>
      <article className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:pt-[87px] xl:gap-[125px]">
        {/* Decorative Welcome Text */}
        <div
          className={cn(
            'absolute left-0 top-0 z-10 sm:left-[calc(50%-(640px-2*32px)/2)] md:left-0',
            'h-[1px] w-[65px] md:h-auto md:w-auto',
            'pointer-events-none bg-light-grey md:bg-transparent',
          )}
        >
          <span
            className={cn(
              'hidden md:inline-block',
              'font-spartan text-[120px] font-bold leading-[200px] tracking-[-3px] text-pale-sky xl:font-league-spartan xl:text-[250px] xl:tracking-[-5px]',
            )}
          >
            Welcome
          </span>
        </div>
        {/* Left Side */}
        <div
          className={cn(
            'relative z-20 pt-[69px] md:pt-[159px] lg:pt-[74px]',
            'w-full md:max-w-[573px] lg:max-w-[445px]',
            'justify-self-center lg:justify-self-start xl:justify-self-end',
          )}
        >
          <h1
            id={`${SECTION_ID}-heading`}
            className="heading-md mb-[22px] md:mb-[43px]"
          >
            Welcome to <br /> Arch Studio
          </h1>
          <div className="body-text space-y-6 text-dark-grey">
            <p>
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
            </p>
            <p>
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </p>
            <p>
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
        </div>
        {/* Right Side */}
        <ResponsiveImage
          imageSource={WELCOME_IMAGE_CONFIG}
          placeholder="blur"
        />
      </article>
    </div>
  );
}
