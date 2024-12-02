import { ArchButton, DynamicImage } from '@/components/common';
import { ROUTES } from '@/config/navigation';
import { cn } from '@/lib/utils';
import { SMALL_TEAM_IMAGE_CONFIG } from './constants';

type TeamProps = {
  className?: string;
};

export function SmallTeam({ className }: TeamProps) {
  return (
    <div className={className}>
      <div className="relative">
        {/* Multi-Source Image */}
        <DynamicImage
          imageConfig={SMALL_TEAM_IMAGE_CONFIG}
          placeholder="blur"
        />
        {/* Image Overlay */}
        <div className="absolute inset-0 z-10 bg-black opacity-50" />
        {/* Content */}
        <div
          className={cn(
            'absolute left-[32px] top-[181px] z-20 sm:left-[calc(50%-(640px-2*32px)/2)] md:left-[58px] md:top-[167px] xl:left-[190px]',
            'flex flex-col items-start justify-between text-white',
            'min-h-[199px] w-full max-w-[311px] md:min-h-[225px] md:max-w-[445px]',
          )}
        >
          <span className="heading-md inline-block">
            Small team, <br /> big ideas
          </span>
          <ArchButton
            text="About Us"
            href={ROUTES.ABOUT.href}
            className="w-[187px] pl-[35px] pr-[32px]"
          />
        </div>
      </div>
    </div>
  );
}
