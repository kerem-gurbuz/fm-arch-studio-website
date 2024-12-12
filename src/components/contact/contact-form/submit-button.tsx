import { ArrowIcon } from '@/components/common';
import { Button } from '@/components/ui/button';

type SubmitButtonProps = {
  isPending: boolean;
};

export function SubmitButton({ isPending }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      disabled={isPending}
      aria-busy={isPending}
      aria-label={isPending ? 'Sending' : 'Send Message'}
      className="h-20 min-w-20 bg-very-dark-blue hover:bg-dark-grey disabled:bg-light-grey"
    >
      {isPending ? (
        <span className="inline-block text-[18px] font-bold leading-[25px] text-white">
          Sending...
        </span>
      ) : (
        <>
          <span className="sr-only">Send Message</span>
          <ArrowIcon className="pointer-events-none h-[18px] w-[24px] flex-shrink-0 stroke-white" />
        </>
      )}
    </Button>
  );
}
