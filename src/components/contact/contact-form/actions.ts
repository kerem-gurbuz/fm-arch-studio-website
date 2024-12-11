'use server';

import DOMPurify from 'isomorphic-dompurify';
import { fromZodError } from 'zod-validation-error';

import { contactFormSchema, type ContactFormValues } from './schemas';

type ReturnType =
  | {
      success: true;
      data: ContactFormValues;
    }
  | {
      success: false;
      error: string;
    };

export async function submitContactForm(values: FormData): Promise<ReturnType> {
  try {
    // Step 1: Validation
    const validatedFields = contactFormSchema.safeParse({
      name: values.get('name'),
      email: values.get('email'),
      message: values.get('message'),
    });

    if (!validatedFields.success) {
      const readableError = fromZodError(validatedFields.error);
      return {
        success: false,
        error: readableError.message,
      };
    }

    // Step 2: Sanitization
    const sanitizedData = {
      name: DOMPurify.sanitize(validatedFields.data.name),
      email: DOMPurify.sanitize(validatedFields.data.email),
      message: DOMPurify.sanitize(validatedFields.data.message),
    };

    // Step 3: Server-side processing
    // Simulate a delay...
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      data: sanitizedData,
    };
  } catch (error) {
    console.error('Error in submitContactForm:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}
