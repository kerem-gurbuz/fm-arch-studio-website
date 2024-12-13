import { ArchButton } from '@/components/common';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-96px)] items-center justify-center px-4 md:min-h-[calc(100vh-152px)]">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-6 text-7xl font-bold tracking-tight">404</h1>
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          Page Not Found
        </h2>
        <p className="mx-auto mb-8 max-w-md text-dark-grey">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <ArchButton
          href="/"
          text="Back to Home"
          className="w-[225px] pl-[37px] pr-[32px]"
        />
      </div>
    </div>
  );
}
