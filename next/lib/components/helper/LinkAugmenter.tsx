import { useInBackend } from '@networkteam/zebra';
import Link from 'next/link';

import { isExternalUri } from '@/lib/utils/externalUri';

type LinkAugmenterProps = {
  href?: string;
  openInNewWindow?: boolean;
  fallbackTag?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
};

export default function LinkAugmenter({
  href,
  openInNewWindow,
  fallbackTag: Tag,
  className,
  children,
}: LinkAugmenterProps) {
  const inBackend = useInBackend();

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
