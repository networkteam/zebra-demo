import { ContentComponent, Editable, useNode } from '@networkteam/zebra';

import { baseClasses } from '@/lib/utils/baseClasses';

import Headline from '../ui/Headline';

const ContentHeadline = () => {
  const node = useNode();
  return (
    <ContentComponent className={baseClasses(node)}>
      <Headline as={node.properties.hierarchy} size={node.properties.size}>
        <Editable property="title" />
      </Headline>
    </ContentComponent>
  );
};

export default ContentHeadline;
