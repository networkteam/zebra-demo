import { BackendContainer } from '@networkteam/zebra';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <BackendContainer />
      </body>
    </Html>
  );
}
