import { ContextProps } from '@networkteam/zebra';
import { useNode } from '@networkteam/zebra/server';
import { ReactNode } from 'react';

const DocumentBackendOnlyPage = async ({
  ctx,
  prefix,
  children,
}: {
  ctx: ContextProps;
  prefix?: string;
  children?: ReactNode;
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const node = await useNode(ctx)();

  return (
    <div className="flex min-h-screen items-center justify-center bg-dark">
      <div className="text-3xl font-medium text-white">
        {prefix && `${prefix}: `}
        {children || node.properties.title}
      </div>
    </div>
  );
};

export default DocumentBackendOnlyPage;
