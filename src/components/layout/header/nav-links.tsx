'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NAV_ITEMS } from '@/config/navigation';
import { cn } from '@/lib/utils';

type NavLinksProps = {
  className?: string;
};

export const NavLinks = ({ className }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary Navigation" className={className}>
      <ul
        aria-label="Navigation Links"
        className="flex h-[40px] w-[313px] justify-between pb-[6px] pt-[9px]"
      >
        {NAV_ITEMS.map((item) => (
          <li
            key={item.href}
            aria-label={item.label}
            className="group relative h-[25px]"
          >
            <Link
              href={item.href}
              className={cn(
                'inline-block text-[18px] font-bold leading-[25px] text-medium-grey transition-colors duration-300 group-hover:text-very-dark-blue',
                { 'text-very-dark-blue': pathname.startsWith(item.href) },
              )}
            >
              {item.label}
            </Link>
            <span
              className={cn(
                'inline-block h-[1px] w-[24px]',
                'absolute bottom-[-6px] left-1/2 -translate-x-1/2',
                'bg-very-dark-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100',
              )}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
