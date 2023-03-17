import {
  ContentCollection,
  ContentCollectionProvider,
  ContentComponent,
  useContentComponent,
  useNode,
} from '@networkteam/zebra';
import classNames from 'classnames';

import { baseClasses } from '@/lib/utils/baseClasses';

import Multicolumn from '../ui/MultiColumn';

const ContentMulticolumn = () => {
  const node = useNode();

  return (
    <ContentComponent className={classNames('w-full', baseClasses(node))}>
      <ContentCollectionProvider nodeName="content">
        {({ collectionProps, children }) => <Multicolumn {...collectionProps}>{children}</Multicolumn>}
      </ContentCollectionProvider>
    </ContentComponent>
  );
};

const ContentMulticolumnColumn = () => {
  const node = useNode();
  const contentComponentProps = useContentComponent();

  return (
    <Multicolumn.Column
      className={baseClasses(node)}
      xs={node.properties.layoutXs}
      sm={node.properties.layoutSm}
      md={node.properties.layoutMd}
      lg={node.properties.layoutLg}
      xl={node.properties.layoutXl}
      xxl={node.properties.layoutXxl}
      {...contentComponentProps}
    >
      <ContentCollection className="h-full" nodeName="content" />
    </Multicolumn.Column>
  );
};

ContentMulticolumn.Column = ContentMulticolumnColumn;

export default ContentMulticolumn;
