import '../styles/tailwind.css';

import { Bayon } from '@next/font/google';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html,
          :root {
            --font-bayon: ${bayon.style.fontFamily};
          }
        `}
      </style>
      <AnimatePresence mode="wait" initial={false}>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </>
  );
}
