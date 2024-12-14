import {
  HeritageSection,
  HeroSection,
  LeadersSection,
} from '@/components/about';
import { aboutMetadata } from '@/config/seo/metadata';
import { aboutJsonLd } from '@/config/seo/schema';

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <main id="about-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <HeroSection />
      <HeritageSection />
      <LeadersSection />
    </main>
  );
}
