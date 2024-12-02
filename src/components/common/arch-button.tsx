import Link from 'next/link';

import { ArrowIcon } from '@/components/common';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ArchButtonProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  text: string;
  href: string;
}

export function ArchButton({
  className,
  text,
  href,
  ...props
}: ArchButtonProps) {
  return (
    <Button
      className={cn(
        'inline-flex h-[72px] w-full items-center justify-between bg-very-dark-blue pb-[22px] pt-[25px] transition-colors duration-300 hover:bg-dark-grey',
        className,
      )}
      asChild
      {...props}
    >
      <Link href={href}>
        <span className="inline-block text-[18px] font-bold leading-[25px] text-white">
          {text}
        </span>
        <ArrowIcon
          className="h-[18px] w-[24px] flex-shrink-0 stroke-white"
          aria-hidden="true"
        />
      </Link>
    </Button>
  );
}
