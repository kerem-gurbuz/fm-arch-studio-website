'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_ITEMS } from '@/config/navigation';
import { useBreakpoint } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { CloseIcon } from './close-icon';
import { HamburgerIcon } from './hamburger-icon';

const TITLE = 'Arch Navigation Menu';
const DESCRIPTION = 'Explore our portfolio, learn about us, or get in touch';

type MobileMenuProps = {
  className?: string;
};

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentBreakpoint = useBreakpoint();
  const isMobile = currentBreakpoint === 'xs' || currentBreakpoint === 'sm';

  useEffect(() => {
    if (isOpen && !isMobile) {
      setIsOpen(false);
    }
  }, [isOpen, isMobile]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="md:hidden">
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </SheetTrigger>
      <SheetContent
        side="arch-right"
        className={cn(
          'h-[235px] w-[343px] bg-pale-sky px-[48px] pb-[42px] pt-[39px]',
          className,
        )}
      >
        <SheetHeader className="sr-only">
          <SheetTitle>{TITLE}</SheetTitle>
          <SheetDescription>{DESCRIPTION}</SheetDescription>
        </SheetHeader>
        <nav aria-label="Primary Navigation">
          <ul
            aria-label="Navigation Links"
            className="flex flex-col gap-[17px]"
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.href} aria-label={item.label} className="h-[40px]">
                <Link
                  href={item.href}
                  className="group relative inline-block text-[32px] font-bold leading-[40px] text-very-dark-blue"
                >
                  {item.label}
                  <span
                    className={cn(
                      'absolute left-[-48px] top-1/2 -translate-y-1/2',
                      'h-[2px] w-[24px] bg-very-dark-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                      { 'opacity-100': pathname.startsWith(item.href) },
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
