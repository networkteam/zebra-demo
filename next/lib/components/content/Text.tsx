import { ContextProps } from '@networkteam/zebra';
import { ContentComponent, Editable, useNode } from '@networkteam/zebra/server';

import { baseClasses } from '@/lib/utils/baseClasses';

import Text from '../ui/Text';

const ContentText = async ({ ctx }: { ctx: ContextProps }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const node = await useNode(ctx)();

  return (
    <ContentComponent ctx={ctx}>
      <Text className={baseClasses(node)}>
        <Editable ctx={ctx} property="text" />
      </Text>
    </ContentComponent>
  );
};

export default ContentText;
