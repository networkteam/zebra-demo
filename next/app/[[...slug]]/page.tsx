import { loadDocumentPropsCached, NodeRenderer } from '@networkteam/zebra/server';
import { DataLoaderOptions } from '@networkteam/zebra/types';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound, redirect } from 'next/navigation';

const dataLoaderOptionsFor = (routePath: string): DataLoaderOptions => ({
  cache: 'default',
  next: {
    tags: ['document', `document:${routePath}`],
  },
});

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string[];
  };
}): Promise<Metadata> {
  const routePath = params.slug && Array.isArray(params.slug) ? params.slug.join('/') : '/';
  const neosData = await loadDocumentPropsCached(routePath, dataLoaderOptionsFor(routePath));
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
  const dataLoaderOptions = dataLoaderOptionsFor(routePath);
  const neosData = await loadDocumentPropsCached(routePath, dataLoaderOptions);

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
        dataLoaderOptions,
      }}
      node={neosData.node}
    />
  );
};

export default Page;
