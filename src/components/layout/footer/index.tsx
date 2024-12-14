import Link from 'next/link';

import { ArchButton, ArchStudioLogo } from '@/components/common';
import { ROUTES } from '@/config/navigation';
import { cn } from '@/lib/utils';
import { NavLinks } from './nav-links';

export function Footer() {
  return (
    <footer id="main-footer" className="relative pb-12 md:p-0">
      {/* Content */}
      <div className="container px-0 lg:px-[97.5px] 2xl:px-[165px]">
        <div className="relative flex flex-col items-center gap-y-[31px] md:flex-row md:justify-between">
          {/* Logo & Navigation */}
          <div className="flex flex-col items-center gap-y-[33px] md:flex-row md:gap-x-[40px] xl:gap-x-[85px]">
            <Link
              href="/"
              className={cn(
                'h-[120px] w-[120px] lg:h-[200px] lg:w-[200px]',
                'flex flex-shrink-0 items-center justify-center',
                'bg-very-dark-blue',
              )}
            >
              <ArchStudioLogo className="h-[24px] w-[58px] fill-white lg:h-[40px] lg:w-[97px]" />
            </Link>
            <NavLinks />
          </div>
          {/* Portfolio Button */}
          <ArchButton
            text="See Our Portfolio"
            href={ROUTES.PORTFOLIO.href}
            className="w-[252px] pl-[37px] pr-[32px]"
          />
          {/* Background-Color Element (Desktop) */}
          <div className="absolute inset-y-0 left-0 right-[156px] -z-10 hidden bg-pale-sky md:block lg:right-[126px]" />
        </div>
      </div>
      {/* Background-Color Element (Mobile) */}
      <div className="absolute inset-x-0 bottom-0 top-[60px] -z-10 bg-pale-sky md:hidden" />
    </footer>
  );
}
