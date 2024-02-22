import Link from 'next/link';
import { ReactNode } from 'react';

import { isExternalUri } from '@/lib/utils/externalUri';

export type Props = {
  href?: string;
  openInNewWindow?: boolean;
  fallbackTag?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
  inBackend?: boolean;
};

export default function LinkAugmenter({
  href,
  openInNewWindow,
  fallbackTag: Tag,
  className,
  children,
  inBackend,
}: Props) {
  if (!href || inBackend) {
    if (Tag) {
      return <Tag className={className}>{children}</Tag>;
    }

    return <>{children}</>;
  }

  const isExternal = isExternalUri(href);

  return (
    <Link
      href={href}
      className={className}
      target={openInNewWindow || isExternal ? '_blank' : undefined}
      rel={openInNewWindow || isExternal ? 'noreferrer' : undefined}
    >
      {children}
    </Link>
  );
}
