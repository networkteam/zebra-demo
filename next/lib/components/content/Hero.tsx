import { ContextProps } from '@networkteam/zebra';
import { ContentComponent, Editable, useInBackend, withNode } from '@networkteam/zebra/server';

import { baseClasses } from '@/lib/utils/baseClasses';

import Hero from '../ui/Hero';

const ContentHero = async ({ ctx }: { ctx: ContextProps }) => {
  const node = await withNode(ctx);
  const inBackend = ctx.inBackend;

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
