import { ContextProps } from '@networkteam/zebra';
import {
  ContentCollection,
  ContentCollectionProvider,
  ContentComponent,
  withContentComponent,
  withNode,
} from '@networkteam/zebra/server';
import classNames from 'classnames';

import { baseClasses } from '@/lib/utils/baseClasses';

import Multicolumn from '../ui/MultiColumn';

const ContentMulticolumn = async ({ ctx }: { ctx: ContextProps }) => {
  const node = await withNode(ctx);

  return (
    <ContentComponent ctx={ctx} className={classNames('w-full', baseClasses(node))}>
      <ContentCollectionProvider ctx={ctx} nodeName="content">
        {({ collectionProps, children }) => <Multicolumn {...collectionProps}>{children}</Multicolumn>}
      </ContentCollectionProvider>
    </ContentComponent>
  );
};

const ContentMulticolumnColumn = async ({ ctx }: { ctx: ContextProps }) => {
  const node = await withNode(ctx);
  const contentComponentProps = await withContentComponent(ctx);

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
      <ContentCollection ctx={ctx} className="h-full" nodeName="content" />
    </Multicolumn.Column>
  );
};

ContentMulticolumn.Column = ContentMulticolumnColumn;

export default ContentMulticolumn;
