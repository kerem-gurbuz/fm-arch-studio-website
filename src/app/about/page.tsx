import { HeritageSection, HeroSection } from '@/components/about';

export default function AboutPage() {
  return (
    <main id="about-page">
      <HeroSection />
      <HeritageSection />
      <section id="leaders-section" className="py-[100px]">
        <div className="container">
          <h2 className="heading-md text-center">Leaders Section</h2>
        </div>
      </section>
    </main>
  );
}
