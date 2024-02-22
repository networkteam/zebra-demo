import { loadDocumentPropsCached, NodeRenderer } from '@networkteam/zebra/server';
import { DataLoaderOptions } from '@networkteam/zebra/types';

const NotFound = async () => {
  const routePath = '/404';
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
