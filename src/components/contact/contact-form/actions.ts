'use server';

import DOMPurify from 'isomorphic-dompurify';

import { contactFormSchema } from './schemas';

export async function submitContactForm(values: FormData) {
  try {
    // Step 1: Validation
    const validatedFields = contactFormSchema.safeParse({
      name: values.get('name'),
      email: values.get('email'),
      message: values.get('message'),
    });

    if (!validatedFields.success) {
      return {
        error: 'Invalid fields. Please check your input.',
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
      error: 'An unexpected error occurred. Please try again later.',
    };
  }
}
