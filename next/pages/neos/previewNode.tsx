import { loadServerSideNodeProps, NeosData, Preview } from '@networkteam/zebra';
import type { GetServerSideProps } from 'next';

import { nodeTypes } from '@/lib/config/nodeTypes';

const PreviewNode = (props: NeosData) => Preview(props, nodeTypes);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = loadServerSideNodeProps(context);

  return {
    props: data,
  };
};

export default PreviewNode;
