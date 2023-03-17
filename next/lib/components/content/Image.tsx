import { ContentComponent, useNode } from '@networkteam/zebra';

import { baseClasses } from '@/lib/utils/baseClasses';

import ImageComponent from '../ui/Image';

const ContentImage = () => {
  const node = useNode();

  return (
    <ContentComponent>
      <ImageComponent
        image={node.properties.image}
        altText={node.properties.alternativeText}
        title={node.properties.title}
        fullwidth={node.properties.fullwidth}
        link={node.properties.link}
        className={baseClasses(node)}
      />
    </ContentComponent>
  );
};

export default ContentImage;
