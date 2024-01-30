import { ContextProps } from '@networkteam/zebra';
import { ContentComponent, useInBackend, useNode } from '@networkteam/zebra/server';

import { baseClasses } from '@/lib/utils/baseClasses';

import ImageComponent from '../ui/Image';

const ContentImage = async ({ ctx }: { ctx: ContextProps }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const node = await useNode(ctx)();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inBackend = useInBackend(ctx);

  return (
    <ContentComponent ctx={ctx}>
      <ImageComponent
        image={node.properties.image}
        altText={node.properties.alternativeText}
        title={node.properties.title}
        fullwidth={node.properties.fullwidth}
        link={node.properties.link}
        className={baseClasses(node)}
        inBackend={inBackend}
      />
    </ContentComponent>
  );
};

export default ContentImage;
