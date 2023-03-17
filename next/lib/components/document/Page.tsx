import { ContentCollection, useInBackend, useNode } from '@networkteam/zebra';

import Layout from './partials/Layout';

const DocumentPage = () => {
  const node = useNode();
  const inBackend = useInBackend();

  return (
    <Layout>
      <ContentCollection nodeName="main" />
    </Layout>
  );
};

export default DocumentPage;
