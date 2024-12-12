import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'This field is required')
    .max(50, 'Name must be less than 50 characters'),
  email: z
    .string()
    .min(1, 'This field is required')
    .email('Invalid email address'),
  message: z
    .string()
    .min(1, 'This field is required')
    .max(500, 'Message must be less than 500 characters'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
