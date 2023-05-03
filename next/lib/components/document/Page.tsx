import { ContentCollection } from '@networkteam/zebra';

import Layout from './partials/Layout';

const DocumentPage = () => {
  return (
    <Layout>
      <ContentCollection nodeName="main" />
    </Layout>
  );
};

export default DocumentPage;
