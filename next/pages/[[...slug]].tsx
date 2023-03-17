import { Frontend, loadStaticPaths, loadStaticProps, NeosData } from '@networkteam/zebra';
import type { GetStaticPathsContext, GetStaticPropsContext } from 'next';

import { nodeTypes } from '@/lib/config/nodeTypes';

const FrontendPage = (props: NeosData) => Frontend(props, nodeTypes);

export const getStaticPaths = async (context: GetStaticPathsContext) => {
  const paths = await loadStaticPaths(context);

  const filteredPaths = paths.filter((path) => path.params.slug[0] !== '404');

  return {
    paths: filteredPaths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const data = await loadStaticProps(context);

  if (data?.node.nodeType === 'Neos.Neos:Shortcut') {
    return {
      redirect: {
        destination: data.node.properties.targetUri || '/',
        permanent: false,
      },
    };
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { ...data },
  };
};

export default FrontendPage;
