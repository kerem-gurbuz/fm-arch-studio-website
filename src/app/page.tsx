import {
  FeaturedProjects,
  HeroSection,
  WelcomeSection,
} from '@/components/home';

export default function HomePage() {
  return (
    <main id="homepage">
      <HeroSection />
      <WelcomeSection />
      <FeaturedProjects />
    </main>
  );
}
