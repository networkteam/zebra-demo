import { ContentCollection, ContentComponent, Editable, useNode } from '@networkteam/zebra';

import { baseClasses } from '@/lib/utils/baseClasses';

import Hero from '../ui/Hero';

const ContentHero = () => {
  const node = useNode();

  return (
    <ContentComponent>
      <Hero
        className={baseClasses(node)}
        title={<Editable property="title" />}
        subtitle={<Editable property="subtitle" />}
        description={<Editable property="description" as="p" />}
        image={node.properties.image}
      />
    </ContentComponent>
  );
};

export default ContentHero;
