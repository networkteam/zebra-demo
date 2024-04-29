import { BackendContainer, BackendIncludes } from '@networkteam/zebra/client';
import { loadPreviewDocumentProps, NodeRenderer } from '@networkteam/zebra/server';

const Page = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const neosData = await loadPreviewDocumentProps(searchParams);

  return (
    <>
      {neosData?.node && (
        <NodeRenderer
          ctx={{
            inBackend: true,
            contextNodePath: neosData?.node.contextPath,
            currentNodeIdentifier: neosData?.node.identifier,
            documentNodeIdentifier: neosData?.node.identifier,
          }}
          node={neosData.node}
        />
      )}
      <BackendIncludes backend={neosData?.backend} />
      <BackendContainer />
    </>
  );
};

export default Page;
