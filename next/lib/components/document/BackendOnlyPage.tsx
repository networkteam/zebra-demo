import { ContextProps } from '@networkteam/zebra';
import { withNode } from '@networkteam/zebra/server';
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
  const node = await withNode(ctx);

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
