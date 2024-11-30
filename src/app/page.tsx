import { HeroSection, WelcomeSection } from '@/components/home';

export default function HomePage() {
  return (
    <main id="homepage">
      <HeroSection />
      <WelcomeSection />
      <section id="featured-projects">
        <div className="container py-[100px]">
          <h2 className="text-center text-3xl font-bold">Featured Projects</h2>
        </div>
      </section>
    </main>
  );
}
