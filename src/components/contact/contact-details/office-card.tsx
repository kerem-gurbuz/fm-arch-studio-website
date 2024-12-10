import { ArrowIcon } from '@/components/common';
import { Button } from '@/components/ui/button';
import { cn, sanitizeString } from '@/lib/utils';
import type { Office } from './types';

type OfficeCardProps = {
  office: Office;
  onViewMap: () => void;
  className?: string;
};

export function OfficeCard({ office, onViewMap, className }: OfficeCardProps) {
  const officeName = sanitizeString(office.name);

  return (
    <div
      aria-labelledby={`${officeName}-heading`}
      className={cn(
        'grid grid-cols-1 gap-y-[43px] sm:grid-cols-[1fr_auto] lg:grid-cols-1 lg:gap-y-[59px]',
        className,
      )}
    >
      {/* Office Details */}
      <div className="space-y-[14px] text-dark-grey">
        <h3
          id={`${officeName}-heading`}
          className="text-[18px] font-bold leading-[35px]"
        >
          {office.name}
        </h3>
        <div className="body-text">
          <p>Mail : {office.email}</p>
          <p>Address : {office.address}</p>
          <p>Phone : {office.phone}</p>
        </div>
      </div>
      {/* View on Map */}
      <Button
        onClick={onViewMap}
        className={cn(
          'group h-[25px] w-[151px] sm:self-end',
          'inline-flex items-center justify-between',
          'ml-[6px] bg-white p-0 hover:bg-white sm:mb-[13px] lg:mb-0',
        )}
      >
        <span className="inline-block text-[18px] font-bold leading-[25px] text-very-dark-blue underline-offset-1 group-hover:underline">
          View on Map
        </span>
        <ArrowIcon className="h-[18px] w-[24px] flex-shrink-0" />
      </Button>
    </div>
  );
}
