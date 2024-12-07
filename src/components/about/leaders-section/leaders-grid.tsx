import { cn } from '@/lib/utils';
import { LeaderCard } from './leader-card';
import type { Leader } from './types';

/*
  Leaders Grid Layout       Leaders Card Layout         
  ------------------------------------------------------------------------
  xs:grid-cols-1            h-[284px] max-w-[311px]
  sm:grid-cols-2            h-[256px] max-w-[280px]
  md:grid-cols-2            h-[256px] max-w-[280px]
  lg:grid-cols-1            h-[320px] max-w-[350px]
  xl:grid-cols-2            h-[320px] max-w-[350px]
 */

type LeadersGridProps = {
  leaders: Leader[];
};

export function LeadersGrid({ leaders }: LeadersGridProps) {
  return (
    <div
      aria-label="Leaders Grid"
      className="grid grid-cols-1 justify-items-center gap-y-[79px] sm:grid-cols-2 md:gap-y-[103px] lg:grid-cols-1 lg:gap-y-[63px] xl:grid-cols-2 xl:gap-x-[30px]"
    >
      {leaders.map((leader, index) => (
        <LeaderCard
          key={leader.name}
          leader={leader}
          className={cn(
            'w-full max-w-[311px] sm:max-w-[280px] lg:max-w-[350px]',
            {
              'sm:justify-self-start lg:justify-self-center': index % 2 === 0,
              'sm:justify-self-end lg:justify-self-center': index % 2 === 1,
            },
          )}
        />
      ))}
    </div>
  );
}
