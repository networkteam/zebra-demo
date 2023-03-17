import { useInBackend } from '@networkteam/zebra';
import Link from 'next/link';

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

  return (
    <Link
      href={href}
      className={className}
      target={openInNewWindow ? '_blank' : undefined}
      rel={openInNewWindow ? 'noreferrer' : undefined}
    >
      {children}
    </Link>
  );
}
