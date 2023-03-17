import { ContentComponent, Editable, useInBackend, useNode } from '@networkteam/zebra';

import { baseClasses } from '@/lib/utils/baseClasses';

import Hero from '../ui/Hero';

const ContentHero = () => {
  const node = useNode();
  const inBackend = useInBackend();

  return (
    <ContentComponent>
      <Hero
        className={baseClasses(node)}
        title={inBackend ? <Editable property="title" /> : node.properties.title}
        subtitle={<Editable property="subtitle" />}
        description={<Editable property="description" as="p" />}
        image={node.properties.image}
        typewriterEnabled={!inBackend}
      />
    </ContentComponent>
  );
};

export default ContentHero;
