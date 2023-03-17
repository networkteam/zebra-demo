import { useNode } from '@networkteam/zebra';
import Link from 'next/link';
import { useRouter } from 'next/router';

import BackendOnlyPage from './BackendOnlyPage';

const DocumentShortcut = () => {
  const router = useRouter();
  const node = useNode();

  return (
    <BackendOnlyPage prefix={router.locale === 'de' ? 'Verweis' : 'Shortcut'}>
      <Link
        className="text-3xl font-medium text-sky-500"
        href={node.properties.targetUri}
        target={node.properties.targetNodeTitle ? '_self' : '_blank'}
      >
        {node.properties.targetNodeTitle || node.properties.targetUri}
      </Link>
    </BackendOnlyPage>
  );
};

export default DocumentShortcut;
