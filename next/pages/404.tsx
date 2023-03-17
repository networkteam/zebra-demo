import { Frontend, loadStaticProps, NeosData } from '@networkteam/zebra';
import { GetStaticPropsContext } from 'next';

import { nodeTypes } from '@/lib/config/nodeTypes';

const Error404 = (props: NeosData) => Frontend(props, nodeTypes);

export default Error404;

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const data = await loadStaticProps({ params: { slug: ['404'] }, ...context });

  return {
    props: { ...data },
  };
};
