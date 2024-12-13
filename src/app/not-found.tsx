import Link from 'next/link';

import { ArrowIcon } from '@/components/common';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-6 text-7xl font-bold tracking-tight">404</h1>
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          Page Not Found
        </h2>
        <p className="mx-auto mb-8 max-w-md text-dark-grey">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Button
          className="h-[72px] gap-6 bg-very-dark-blue px-8 transition-colors duration-300 hover:bg-dark-grey"
          asChild
        >
          <Link href="/">
            <span className="inline-block text-[18px] font-bold leading-[25px] text-white">
              Back to Home
            </span>
            <ArrowIcon className="pointer-events-none h-[18px] w-[24px] flex-shrink-0 stroke-white" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
