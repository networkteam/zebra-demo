import { ContextProps } from '@networkteam/zebra';
import { useNode } from '@networkteam/zebra/server';
import Link from 'next/link';

import BackendOnlyPage from './BackendOnlyPage';

const DocumentShortcut = async ({ ctx }: { ctx: ContextProps }) => {
  // TODO Add dynamic locale support
  const locale: string = 'en';

  // TODO Fix eslint rule of hooks
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const node = await useNode(ctx)();

  return (
    <BackendOnlyPage ctx={ctx} prefix={locale === 'de' ? 'Verweis' : 'Shortcut'}>
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
