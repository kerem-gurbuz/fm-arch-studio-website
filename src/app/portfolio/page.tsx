import { Portfolio } from '@/components/portfolio';
import { portfolioMetadata } from '@/config/seo/metadata';

export const metadata = portfolioMetadata;

export default function PortfolioPage() {
  return (
    <main id="portfolio-page">
      <Portfolio />
    </main>
  );
}
