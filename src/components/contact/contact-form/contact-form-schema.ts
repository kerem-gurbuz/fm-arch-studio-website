import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .max(50, 'Name must be less than 50 characters'),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  message: z
    .string()
    .trim()
    .min(1, 'Message is required')
    .max(500, 'Message must be less than 500 characters'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
