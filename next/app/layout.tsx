import '../styles/global.css';
import '../styles/tailwind.css';
import '@/lib/config/nodeTypes';

import { loadDocumentPropsCached } from '@networkteam/zebra/server';
import { Metadata, ResolvingMetadata } from 'next';
import { Bayon } from 'next/font/google';
import { ReactNode } from 'react';

import AnimationWrapper from '../lib/components/layout/AnimationWrapper';

// See https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css
const bayon = Bayon({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bayon',
});

export async function generateMetadata(
  {
    params,
  }: {
    params: {
      slug: string[];
    };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const routePath = params.slug && Array.isArray(params.slug) ? params.slug.join('/') : '';
  const neosData = await loadDocumentPropsCached(routePath);

  if (!neosData) {
    return {};
  }

  const { node, site, meta } = neosData;

  const title = meta?.isRootPage ? site.properties.title : `${node.properties.title} – ${site.properties.title}`;

  return {
    title,
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${bayon.variable}`}>
      <body>
        <AnimationWrapper>{children}</AnimationWrapper>
      </body>
    </html>
  );
}
