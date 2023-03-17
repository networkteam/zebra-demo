import { ContentCollection, ContentComponent, Editable, useNode } from '@networkteam/zebra';

import Hero from '../ui/Hero';

const ContentHero = () => {
  const node = useNode();

  return (
    <ContentComponent>
      <Hero
        title={<Editable property="title" />}
        subtitle={<Editable property="subtitle" />}
        description={<Editable property="description" as="p" />}
        image={node.properties.image}
      />
    </ContentComponent>
  );
};

export default ContentHero;
