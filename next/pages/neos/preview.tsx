import { loadServerSideDocumentProps, NeosData, Preview } from '@networkteam/zebra';
import type { GetServerSideProps } from 'next';

import { nodeTypes } from '@/lib/config/nodeTypes';

const PreviewPage = (props: NeosData) => Preview(props, nodeTypes);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = loadServerSideDocumentProps(context);

  return {
    props: data,
  };
};

export default PreviewPage;
