import { ContextProps } from '@networkteam/zebra';
import { ContentCollection, ContentComponent, withNode } from '@networkteam/zebra/server';

import { baseClasses } from '@/lib/utils/baseClasses';

import Section from '../ui/Section';

const ContentSection = async ({ ctx }: { ctx: ContextProps }) => {
  const node = await withNode(ctx);

  return (
    <ContentComponent ctx={ctx}>
      <Section theme={node.properties.theme} className={baseClasses(node)}>
        <ContentCollection ctx={ctx} nodeName="content" />
      </Section>
    </ContentComponent>
  );
};

export default ContentSection;
