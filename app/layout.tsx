import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Sanjarbek Otabekov - Portfolio',
  description: 'Sanjarbek Otabekovning professional portfoliosi. Zamonaviy veb-ishlanmalar, loyihalar va ko\'nikmalar.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#0A0A0B] text-[#F0F0F0] antialiased overflow-x-hidden`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
