import { ContextProps } from '@networkteam/zebra';
import { ContentCollection } from '@networkteam/zebra/server';

import Layout from './partials/Layout';

const DocumentPage = ({ ctx }: { ctx: ContextProps }) => {
  return (
    <Layout ctx={ctx}>
      <ContentCollection ctx={ctx} nodeName="main" />
    </Layout>
  );
};

export default DocumentPage;
