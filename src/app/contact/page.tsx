import { ContactDetails, ContactForm, HeroSection } from '@/components/contact';
import { contactMetadata } from '@/config/seo/metadata';

export const metadata = contactMetadata;

export default function ContactPage() {
  return (
    <main id="contact-page">
      <HeroSection />
      <ContactDetails />
      <ContactForm />
    </main>
  );
}
