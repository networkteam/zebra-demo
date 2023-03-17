import { ContentCollection, ContentComponent, Editable, useNode } from '@networkteam/zebra';
import Image from '../ui/Image';
import { baseClasses } from '@/lib/utils/baseClasses';

const ContentImage = () => {
  const node = useNode();

  return (
    <ContentComponent>
      <Image
        altText={node.properties.alternativeText}
        fullwidth={node.properties.fullwidth}
        image={node.properties.image}
        title={node.properties.title}
        link={node.properties.link}
        baseClasses={baseClasses(node)}

      />
    </ContentComponent>
  );
};

export default ContentImage;
