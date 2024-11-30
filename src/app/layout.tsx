import { Footer, Header } from '@/components/layout';
import { league_spartan, spartan } from '@/lib/styles/fonts';
import '@/lib/styles/globals.css';

export { metadata } from '@/config/seo/metadata';

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
      </body>
    </html>
  );
}
