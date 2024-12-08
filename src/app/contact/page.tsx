import { HeroSection } from '@/components/contact';

export default function ContactPage() {
  return (
    <main id="contact-page">
      <HeroSection />
      <section id="contact-details" className="py-[200px]">
        <div className="container">
          <h2 className="heading-md">Contact Details</h2>
        </div>
      </section>
      <section id="contact-form" className="py-[200px]">
        <div className="container">
          <h2 className="heading-md">Contact Form</h2>
        </div>
      </section>
    </main>
  );
}
