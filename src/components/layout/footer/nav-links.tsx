'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAV_ITEMS } from '@/config/navigation';
import { cn } from '@/lib/utils';

type NavLinksProps = {
  className?: string;
};

export function NavLinks({ className }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Secondary Navigation" className={className}>
      <ul
        aria-label="Navigation Links"
        className={cn(
          'md:h-[120px] md:w-[313px] lg:h-[200px]',
          'md:pb-[46px] md:pt-[49px] lg:pb-[87px] lg:pt-[88px]',
          'flex flex-col items-center gap-8 md:flex-row md:justify-between',
        )}
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.href} aria-label={item.label} className="h-[25px]">
            <Link
              href={item.href}
              className={cn(
                'inline-block text-[18px] font-bold leading-[25px] text-medium-grey transition-colors duration-300 hover:text-very-dark-blue',
                { 'text-very-dark-blue': pathname.startsWith(item.href) },
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
