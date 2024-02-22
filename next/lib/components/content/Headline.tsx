import { ContextProps } from '@networkteam/zebra';
import { ContentComponent, Editable, withNode } from '@networkteam/zebra/server';

import { baseClasses } from '@/lib/utils/baseClasses';

import Headline from '../ui/Headline';

const ContentHeadline = async ({ ctx }: { ctx: ContextProps }) => {
  const node = await withNode(ctx);

  return (
    <ContentComponent ctx={ctx} className={baseClasses(node)}>
      <Headline as={node.properties.hierarchy} size={node.properties.size}>
        <Editable ctx={ctx} property="title" />
      </Headline>
    </ContentComponent>
  );
};

export default ContentHeadline;
