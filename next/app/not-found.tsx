import { loadDocumentPropsCached, NodeRenderer } from '@networkteam/zebra/server';
import { DataLoaderOptions } from '@networkteam/zebra/types';
import { headers } from 'next/headers';

const NotFound = async () => {
  const routePath = '/404';

  // Do not prerender the 404 page (e.g. in CI) by calling a function that causes a dynamic route.
  // Note: using a route segment config here would not work.
  if (process.env.CI) {
    headers();
  }

  const dataLoaderOptions: DataLoaderOptions = {
    cache: 'force-cache',
    next: {
      tags: ['document', `document:${routePath}`],
    },
  };
  const neosData = await loadDocumentPropsCached(routePath, dataLoaderOptions);
  if (!neosData) {
    console.warn('/404 document not found');
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <NodeRenderer
      ctx={{
        routePath,
        currentNodeIdentifier: neosData.node.identifier,
        documentNodeIdentifier: neosData.node.identifier,
        dataLoaderOptions,
      }}
      node={neosData.node}
    />
  );
};

export default NotFound;
