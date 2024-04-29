import '../styles/global.css';
import '../styles/tailwind.css';
import '@/lib/config/nodeTypes';

import { Bayon } from 'next/font/google';
import { ReactNode } from 'react';

import AnimationWrapper from '../lib/components/layout/AnimationWrapper';

// See https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bayon',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${bayon.variable}`}>
      <body>
        <AnimationWrapper>{children}</AnimationWrapper>
      </body>
    </html>
  );
}
