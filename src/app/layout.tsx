import { Header } from '@/components/layout';
import { league_spartan } from '@/lib/styles/fonts';
import '@/lib/styles/globals.css';

export { metadata } from '@/config/seo/metadata';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${league_spartan.variable} font-league-spartan antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
