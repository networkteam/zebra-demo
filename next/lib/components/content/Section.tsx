import { ContextProps } from '@networkteam/zebra';
import { ContentCollection, ContentComponent, useNode } from '@networkteam/zebra/server';

import { baseClasses } from '@/lib/utils/baseClasses';

import Section from '../ui/Section';

const ContentSection = async ({ ctx }: { ctx: ContextProps }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const node = await useNode(ctx)();

  return (
    <ContentComponent ctx={ctx}>
      <Section theme={node.properties.theme} className={baseClasses(node)}>
        <ContentCollection ctx={ctx} nodeName="content" />
      </Section>
    </ContentComponent>
  );
};

export default ContentSection;
