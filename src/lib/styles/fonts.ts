import { League_Spartan } from 'next/font/google';
import localFont from 'next/font/local';

export const spartan = localFont({
  src: './Spartan-Bold.ttf',
  weight: '700',
  style: 'normal',
  display: 'swap',
  variable: '--font-spartan',
});

export const league_spartan = League_Spartan({
  weight: ['500', '700'],
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
  variable: '--font-league-spartan',
});
