import { loadDocumentPropsCached, NodeRenderer } from '@networkteam/zebra/server';

const NotFound = async () => {
  const routePath = '/404';

  const neosData = await loadDocumentPropsCached(routePath);
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
      }}
      node={neosData.node}
    />
  );
};

export default NotFound;
