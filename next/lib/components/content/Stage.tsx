import { ContextProps } from '@networkteam/zebra';
import { ContentCollection, ContentComponent } from '@networkteam/zebra/server';

import Stage from '../ui/Stage';

const ContentStage = ({ ctx }: { ctx: ContextProps }) => {
  return (
    <ContentComponent ctx={ctx}>
      <Stage>
        <ContentCollection ctx={ctx} nodeName="content" />
      </Stage>
    </ContentComponent>
  );
};

export default ContentStage;
