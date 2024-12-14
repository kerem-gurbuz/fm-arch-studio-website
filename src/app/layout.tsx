import type { Metadata } from 'next';

import { Footer, Header } from '@/components/layout';
import { Toaster } from '@/components/ui/toaster';
import { homeMetadata } from '@/config/seo/metadata';
import { league_spartan, spartan } from '@/lib/styles/fonts';
import '@/lib/styles/globals.css';

export const metadata: Metadata = {
  ...homeMetadata,
  title: {
    default: homeMetadata.title as string,
    template: '%s | Arch Studio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spartan.variable} ${league_spartan.variable}`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
