import { ContextProps, NeosContentNode } from '@networkteam/zebra';
import { ContentComponent, NodeRenderer, withNode } from '@networkteam/zebra/server';

const ContentReferences = async ({ ctx }: { ctx: ContextProps }) => {
  const node = await withNode(ctx);

  return (
    <ContentComponent ctx={ctx}>
      {node.children?.map((reference: NeosContentNode) => (
        <NodeRenderer key={reference.identifier} ctx={ctx} node={reference} />
      ))}
    </ContentComponent>
  );
};

export default ContentReferences;
