import { ContextProps } from '@networkteam/zebra';
import { ContentComponent, Editable, useNode } from '@networkteam/zebra/server';

import { baseClasses } from '@/lib/utils/baseClasses';

import Headline from '../ui/Headline';

const ContentHeadline = async ({ ctx }: { ctx: ContextProps }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const node = await useNode(ctx)();

  return (
    <ContentComponent ctx={ctx} className={baseClasses(node)}>
      <Headline as={node.properties.hierarchy} size={node.properties.size}>
        <Editable ctx={ctx} property="title" />
      </Headline>
    </ContentComponent>
  );
};

export default ContentHeadline;
