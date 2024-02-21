import { loadDocumentPropsCached, NodeRenderer } from '@networkteam/zebra/server';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound, redirect } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string[];
  };
}): Promise<Metadata> {
  const routePath = params.slug && Array.isArray(params.slug) ? params.slug.join('/') : '/';
  const neosData = await loadDocumentPropsCached(routePath);
  if (!neosData) {
    return {};
  }

  const { node, site, meta } = neosData;
  const title = meta?.isRootPage ? site.properties.title : `${node.properties.title} – ${site.properties.title}`;
  return {
    title,
  };
}

const Page = async ({ params: { slug } }: { params: { slug: string[] } }) => {
  const routePath = slug && Array.isArray(slug) ? slug.join('/') : '/';

  const neosData = await loadDocumentPropsCached(routePath);

  if (!neosData) {
    return notFound();
  }

  if (neosData?.node.nodeType === 'Neos.Neos:Shortcut') {
    return redirect(neosData.node.properties.targetUri || '/');
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

export default Page;
