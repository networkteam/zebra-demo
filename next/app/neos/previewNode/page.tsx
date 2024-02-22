import { loadPreviewDocumentProps, NodeRenderer } from '@networkteam/zebra/server';

const PreviewNode = async ({
  params: { slug },
  searchParams,
}: {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const routePath = '/' + (slug && Array.isArray(slug) ? slug.join('/') : '');
  const neosData = await loadPreviewDocumentProps(searchParams);

  return (
    neosData?.node && (
      <NodeRenderer
        ctx={{
          routePath,
          inBackend: true,
          contextNodePath: neosData?.node.contextPath,
          currentNodeIdentifier: neosData?.node.identifier,
          documentNodeIdentifier: neosData?.node.identifier,
        }}
        node={neosData.node}
      />
    )
  );
};

export default PreviewNode;
