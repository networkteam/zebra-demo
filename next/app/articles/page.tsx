import { loadDocumentPropsCached, loadQueryResult } from '@networkteam/zebra/server';
import { DataLoaderOptions, NeosNode } from '@networkteam/zebra/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Layout from '@/lib/components/document/partials/Layout';
import Section from '@/lib/components/ui/Section';

import ArticleTeaser from './_components/ArticleTeaser';
import LoadMoreArticles from './_components/LoadMoreArticles';
import { ArticlesMeta } from './_types';

// We use a fixed route path here, since this is a fixed route
const routePath = '/articles';

const dataLoaderOptions: DataLoaderOptions = {
  cache: 'force-cache',
  next: {
    tags: ['document'],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const neosData = await loadDocumentPropsCached(routePath, dataLoaderOptions);
  if (!neosData || !('node' in neosData)) {
    return {};
  }

  const { node, site, meta } = neosData;
  const title = meta?.isRootPage ? site.properties.title : `${node.properties.title} – ${site.properties.title}`;
  return {
    title,
  };
}

const Page = async () => {
  const neosData = await loadDocumentPropsCached(routePath, dataLoaderOptions);

  if (!neosData || !('node' in neosData)) {
    return notFound();
  }

  const ctx = {
    routePath,
    currentNodeIdentifier: neosData.node.identifier,
    documentNodeIdentifier: neosData.node.identifier,
    dataLoaderOptions,
  };

  return (
    <Layout ctx={ctx}>
      <ArticlesList />
    </Layout>
  );
};

/**
 * ArticlesList fetches a list of articles as nodes from a query named "articles" that is declared via Fusion.
 */
const ArticlesList = async () => {
  const result = await loadQueryResult<NeosNode, ArticlesMeta>('articles', {}, dataLoaderOptions);

  return (
    <Section theme="light" className="mt-20">
      <div className="flex flex-col gap-8">
        {result?.data.map((article) => <ArticleTeaser key={article.identifier} article={article} />)}
        <LoadMoreArticles hasMore={result?.meta.hasMore} loader={loadArticles} />
      </div>
    </Section>
  );
};

/**
 * loadArticles is a Server Action that is passed to a Client Component to fetch more data.
 * It sets a pagination query parameter with a current page to only load the next page of data.
 */
const loadArticles = async (page: number) => {
  'use server';
  return await loadQueryResult<NeosNode, ArticlesMeta>('articles', { pagination: { page } }, dataLoaderOptions);
};

export default Page;
