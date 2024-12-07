import {
  HeritageSection,
  HeroSection,
  LeadersSection,
} from '@/components/about';

export default function AboutPage() {
  return (
    <main id="about-page">
      <HeroSection />
      <HeritageSection />
      <LeadersSection />
    </main>
  );
}
