import { ContactDetails, HeroSection } from '@/components/contact';

export default function ContactPage() {
  return (
    <main id="contact-page">
      <HeroSection />
      <ContactDetails />
      <section id="contact-form" className="py-[200px]">
        <div className="container">
          <h2 className="heading-md">Contact Form</h2>
        </div>
      </section>
    </main>
  );
}
