import { ContentComponent, ContentRegistry, NeosContentNode, useNode } from '@networkteam/zebra';

const ContentReferences = () => {
  const node = useNode();

  return (
    <ContentComponent>
      {node.children?.map((reference: NeosContentNode) => (
        <ContentRegistry key={reference.identifier} node={reference} />
      ))}
    </ContentComponent>
  );
};

export default ContentReferences;
