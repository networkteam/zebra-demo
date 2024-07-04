import { ContextProps } from '@networkteam/zebra';
import { ContentCollection, withNode } from '@networkteam/zebra/server';

import Headline from '../ui/Headline';
import Section from '../ui/Section';
import Layout from './partials/Layout';

const DocumentPage = async ({ ctx }: { ctx: ContextProps }) => {
  const node = await withNode(ctx);
  return (
    <Layout ctx={ctx}>
      <Section theme="dark" className="py-20">
        <Headline size="h1">{node.properties.title}</Headline>
      </Section>

      <ContentCollection ctx={ctx} nodeName="main" />
    </Layout>
  );
};

export default DocumentPage;
