import { Portfolio } from '@/components/portfolio';
import { portfolioMetadata } from '@/config/seo/metadata';
import { portfolioJsonLd } from '@/config/seo/schema';

export const metadata = portfolioMetadata;

export default function PortfolioPage() {
  return (
    <main id="portfolio-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      <Portfolio />
    </main>
  );
}
