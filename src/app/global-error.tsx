'use client';

import { RefreshCcw } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

import { ArrowIcon } from '@/components/common';
import { Button } from '@/components/ui/button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-6 text-7xl font-bold tracking-tight">Oops!</h1>
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Something went wrong
            </h2>
            <p className="mx-auto mb-8 max-w-md text-dark-grey">
              We apologize for the inconvenience. Our team has been notified and
              is working to resolve the issue.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 min-[500px]:flex-row">
              <Button
                onClick={() => reset()}
                className="h-[72px] w-full max-w-[220px] gap-6 bg-very-dark-blue px-8 transition-colors duration-300 hover:bg-dark-grey"
              >
                <RefreshCcw className="h-5 w-5" />
                <span className="inline-block text-[18px] font-bold leading-[25px] text-white">
                  Try Again
                </span>
              </Button>
              <Button
                className="h-[72px] w-full max-w-[220px] gap-6 bg-very-dark-blue px-8 transition-colors duration-300 hover:bg-dark-grey"
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
        </div>
      </body>
    </html>
  );
}
