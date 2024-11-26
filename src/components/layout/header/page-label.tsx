'use client';

import { usePathname } from 'next/navigation';

import { cn, getRouteLabel } from '@/lib/utils';

type PageLabelProps = {
  className?: string;
};

export function PageLabel({ className }: PageLabelProps) {
  const pathname = usePathname();
  const currentPage = getRouteLabel(pathname);
  if (!currentPage) return null;

  return (
    <>
      <div
        aria-hidden
        className={cn(
          'absolute left-[-44px] top-[-56px] h-[104px] w-[1px] -translate-x-full bg-light-grey 2xl:left-[-87px]',
          className,
        )}
      />
      <div
        className={cn(
          'absolute bottom-[-56px] left-[-47px] h-[24px] origin-left translate-y-1/2 rotate-90 2xl:left-[-90px]',
          className,
        )}
      >
        <span
          aria-label={currentPage}
          className="inline-block text-nowrap text-[18px] font-medium uppercase leading-[24px] tracking-[18px] text-light-grey"
        >
          {currentPage}
        </span>
      </div>
    </>
  );
}
