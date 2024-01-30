import { ContextProps, NeosContentNode } from '@networkteam/zebra';
import { ContentComponent, NodeRenderer, useNode } from '@networkteam/zebra/server';

const ContentReferences = async ({ ctx }: { ctx: ContextProps }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const node = await useNode(ctx)();

  return (
    <ContentComponent ctx={ctx}>
      {node.children?.map((reference: NeosContentNode) => (
        <NodeRenderer key={reference.identifier} ctx={ctx} node={reference} />
      ))}
    </ContentComponent>
  );
};

export default ContentReferences;
