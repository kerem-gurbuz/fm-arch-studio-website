import { ContactDetails, ContactForm, HeroSection } from '@/components/contact';
import { contactMetadata } from '@/config/seo/metadata';
import { contactJsonLd } from '@/config/seo/schema';

export const metadata = contactMetadata;

export default function ContactPage() {
  return (
    <main id="contact-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <HeroSection />
      <ContactDetails />
      <ContactForm />
    </main>
  );
}
