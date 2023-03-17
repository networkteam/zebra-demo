import { ContentComponent, Editable, useNode } from '@networkteam/zebra';

import { baseClasses } from '@/lib/utils/baseClasses';
import Text from '../ui/Text';


const ContentText = () => {
  const node = useNode();
  return (
    <ContentComponent>
      <Text className={baseClasses(node)}>
        <Editable property="text" />
      </Text>
    </ContentComponent>
  );
};

export default ContentText;
