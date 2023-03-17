import { ContentCollection, ContentComponent, useNode } from '@networkteam/zebra';

import { baseClasses } from '@/lib/utils/baseClasses';

import Section from '../ui/Section';

const ContentSection = () => {
  const node = useNode();

  return (
    <ContentComponent>
      <Section theme={node.properties.theme} className={baseClasses(node)}>
        <ContentCollection nodeName="content" />
      </Section>
    </ContentComponent>
  );
};

export default ContentSection;
