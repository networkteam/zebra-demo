import { ContentCollection, ContentComponent } from '@networkteam/zebra';

import Stage from '../ui/Stage';

const ContentStage = () => {
  return (
    <ContentComponent>
      <Stage>
        <ContentCollection nodeName="content" />
      </Stage>
    </ContentComponent>
  );
};

export default ContentStage;
