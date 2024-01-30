import { ContextProps } from '@networkteam/zebra';
import { ContentComponent, Editable, useInBackend, useNode } from '@networkteam/zebra/server';

import { baseClasses } from '@/lib/utils/baseClasses';

import Hero from '../ui/Hero';

const ContentHero = async ({ ctx }: { ctx: ContextProps }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const node = await useNode(ctx)();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inBackend = useInBackend(ctx);

  return (
    <ContentComponent ctx={ctx}>
      <Hero
        className={baseClasses(node)}
        title={inBackend ? <Editable ctx={ctx} property="title" /> : node.properties.title}
        subtitle={<Editable ctx={ctx} property="subtitle" />}
        description={<Editable ctx={ctx} property="description" as="p" />}
        image={node.properties.image}
        typewriterEnabled={!inBackend}
      />
    </ContentComponent>
  );
};

export default ContentHero;
