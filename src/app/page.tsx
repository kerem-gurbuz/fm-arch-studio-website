import {
  FeaturedProjects,
  HeroSection,
  WelcomeSection,
} from '@/components/home';
import { homeJsonLd } from '@/config/seo/schema';

export default function HomePage() {
  return (
    <main id="homepage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HeroSection />
      <WelcomeSection />
      <FeaturedProjects />
    </main>
  );
}
