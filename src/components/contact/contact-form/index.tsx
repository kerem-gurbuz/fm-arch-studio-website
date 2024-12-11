'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { submitContactForm } from './actions';
import { SECTION_ID } from './constants';
import { contactFormSchema, type ContactFormValues } from './schemas';
import { SubmitButton } from './submit-button';

export function ContactForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await submitContactForm(formData);

      if (result.error) {
        console.error('Error:', result.error);
        // TODO: Add toast notification
        return;
      }

      console.log('Success:', result.success);
      // TODO: Add toast notification

      form.reset();
    });
  }

  return (
    <section
      id={SECTION_ID}
      aria-labelledby={`${SECTION_ID}-heading`}
      className="pb-[72px] pt-[36.5px] md:pb-[200px] md:pt-[100px] lg:pb-[160px] lg:pt-[79.5px]"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-y-[42px] md:gap-y-[60px] lg:grid-cols-[350px_1fr] lg:gap-x-[30px]">
          {/* Title */}
          <h2 id={`${SECTION_ID}-heading`} className="heading-md">
            Connect <br className="inline md:hidden lg:inline" /> with us
          </h2>
          {/* Contact Form */}
          <Form {...form}>
            <form
              aria-live="polite"
              onSubmit={form.handleSubmit(onSubmit)}
              noValidate
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="group relative mb-11 lg:mt-[6px]">
                    <FormControl>
                      <Input
                        placeholder="Name"
                        autoComplete="off"
                        className="h-[43px] px-[34.49px] pb-[21px] pt-0 text-[20px] font-bold leading-[22px] tracking-[-0.31px] text-very-dark-blue placeholder:text-light-grey focus-visible:ring-0"
                        {...field}
                      />
                    </FormControl>
                    {/* Bottom-Border */}
                    <span
                      className={cn(
                        'absolute inset-x-0 bottom-0 h-[1px] translate-y-full bg-very-dark-blue transition-[height] group-focus-within:h-[3px]',
                        { 'bg-red-error': form.formState.errors.name },
                      )}
                    />
                    <FormMessage className="absolute bottom-[16px] right-[16px] hidden text-[18px] font-bold leading-[16.56px] tracking-[-0.28px] text-red-error sm:inline-block" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="group relative mb-11">
                    <FormControl>
                      <Input
                        placeholder="Email"
                        type="email"
                        autoComplete="off"
                        className="h-[43px] px-[34.49px] pb-[21px] pt-0 text-[20px] font-bold leading-[22px] tracking-[-0.31px] text-very-dark-blue placeholder:text-light-grey focus-visible:ring-0"
                        {...field}
                      />
                    </FormControl>
                    {/* Bottom-Border */}
                    <span
                      className={cn(
                        'absolute inset-x-0 bottom-0 h-[1px] translate-y-full bg-very-dark-blue transition-[height] group-focus-within:h-[3px]',
                        { 'bg-red-error': form.formState.errors.email },
                      )}
                    />
                    <FormMessage className="absolute bottom-[16px] right-[16px] hidden text-[18px] font-bold leading-[16.56px] tracking-[-0.28px] text-red-error sm:inline-block" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="group relative">
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        autoComplete="off"
                        className="min-h-[91px] resize-y px-[34.49px] pb-[21px] pt-0 text-[20px] font-bold leading-[22px] tracking-[-0.31px] text-very-dark-blue placeholder:text-light-grey focus-visible:ring-0"
                        {...field}
                      />
                    </FormControl>
                    {/* Bottom-Border */}
                    <span
                      className={cn(
                        'absolute inset-x-0 bottom-0 h-[1px] translate-y-full bg-very-dark-blue transition-[height] group-focus-within:h-[3px]',
                        { 'bg-red-error': form.formState.errors.message },
                      )}
                    />
                    <FormMessage className="absolute bottom-[16px] right-[16px] hidden text-[18px] font-bold leading-[16.56px] tracking-[-0.28px] text-red-error sm:inline-block" />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <SubmitButton isPending={isPending} />
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
