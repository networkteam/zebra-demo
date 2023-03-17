import { ContentCollection, ContentComponent, Editable, useNode } from '@networkteam/zebra';
import Section from '../ui/Section';

const ContentSection = () => {
  const node = useNode();

  return (
    <ContentComponent>
      <Section backgroundColor={node.properties.backroundColor as string}>
        <ContentCollection nodeName="content" />
      </Section>
    </ContentComponent>
  );
};

export default ContentSection;
