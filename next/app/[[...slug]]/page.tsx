import { loadDocumentPropsCached, NodeRenderer } from '@networkteam/zebra/server';
import { notFound } from 'next/navigation';

const Page = async ({ params: { slug } }: { params: { slug: string[] } }) => {
  const routePath = slug && Array.isArray(slug) ? slug.join('/') : '/';

  const neosData = await loadDocumentPropsCached(routePath);

  if (!neosData) {
    return notFound();
  }

  // TODO Handle shortcut!

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

export default Page;
