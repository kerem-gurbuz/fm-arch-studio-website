import { HeroSection } from '@/components/home';

export default function HomePage() {
  return (
    <main id="home-page">
      <HeroSection />
      <section id="welcome-section">
        <div className="container py-[100px]">
          <h2 className="text-center text-3xl font-bold">Welcome Section</h2>
        </div>
      </section>
      <section id="featured-projects">
        <div className="container py-[100px]">
          <h2 className="text-center text-3xl font-bold">Featured Projects</h2>
        </div>
      </section>
    </main>
  );
}
