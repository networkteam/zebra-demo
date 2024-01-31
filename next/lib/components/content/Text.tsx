import { ContextProps } from '@networkteam/zebra';
import { ContentComponent, Editable, withNode } from '@networkteam/zebra/server';

import { baseClasses } from '@/lib/utils/baseClasses';

import Text from '../ui/Text';

const ContentText = async ({ ctx }: { ctx: ContextProps }) => {
  const node = await withNode(ctx);

  return (
    <ContentComponent ctx={ctx}>
      <Text className={baseClasses(node)}>
        <Editable ctx={ctx} property="text" />
      </Text>
    </ContentComponent>
  );
};

export default ContentText;
