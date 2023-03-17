import { ContentCollection, ContentComponent, Editable, useNode } from '@networkteam/zebra';

import { baseClasses } from '@/lib/utils/baseClasses';

import Section from '../ui/Section';

const ContentSection = () => {
  const node = useNode();

  return (
    <ContentComponent>
      <Section className={baseClasses(node)} backgroundColor={node.properties.backroundColor as string}>
        <ContentCollection nodeName="content" />
      </Section>
    </ContentComponent>
  );
};

export default ContentSection;
