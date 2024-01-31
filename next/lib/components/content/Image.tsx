import { ContextProps } from '@networkteam/zebra';
import { ContentComponent, useInBackend, withNode } from '@networkteam/zebra/server';

import { baseClasses } from '@/lib/utils/baseClasses';

import ImageComponent from '../ui/Image';

const ContentImage = async ({ ctx }: { ctx: ContextProps }) => {
  const node = await withNode(ctx);

  return (
    <ContentComponent ctx={ctx}>
      <ImageComponent
        image={node.properties.image}
        altText={node.properties.alternativeText}
        title={node.properties.title}
        fullwidth={node.properties.fullwidth}
        link={node.properties.link}
        className={baseClasses(node)}
        inBackend={ctx.inBackend}
      />
    </ContentComponent>
  );
};

export default ContentImage;
