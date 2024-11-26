import Link from 'next/link';

import { ArchStudioLogo } from '@/components/common';
import { cn } from '@/lib/utils';
import { MobileMenu } from './mobile-menu';
import { NavLinks } from './nav-links';
import { PageLabel } from './page-label';

export function Header() {
  return (
    <header
      id="main-header"
      className="relative z-[100] bg-white py-8 md:py-14"
    >
      <div className="container flex items-center justify-between">
        <div
          className={cn(
            'relative w-full md:w-[488px] lg:w-[504px]',
            'flex items-center justify-between',
          )}
        >
          <PageLabel className="hidden md:block" />
          <Link href="/" className="flex-shrink-0">
            <ArchStudioLogo className="h-[32px] w-[77px] fill-very-dark-blue md:h-[40px] md:w-[97px]" />
          </Link>
          <NavLinks className="hidden md:block" />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
