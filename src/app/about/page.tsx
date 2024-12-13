import {
  HeritageSection,
  HeroSection,
  LeadersSection,
} from '@/components/about';
import { aboutMetadata } from '@/config/seo/metadata';

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <main id="about-page">
      <HeroSection />
      <HeritageSection />
      <LeadersSection />
    </main>
  );
}
