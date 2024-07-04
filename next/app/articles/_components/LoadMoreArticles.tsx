'use client';

import { useState } from 'react';

import ArticleTeaser from './ArticleTeaser';

const LoadMoreArticles = ({
  hasMore: originalHasMore = false,
  loader,
}: {
  hasMore?: boolean;
  loader: (page: number) => Promise<any>;
}) => {
  const [meta, setMeta] = useState({
    hasMore: originalHasMore,
    page: 0,
  });
  const [additionalArticles, setAdditionalArticles] = useState([] as any[]);

  const loadNextPage = async () => {
    const newPage = meta.page + 1;
    const result = await loader(newPage);

    setMeta({
      hasMore: result.meta.hasMore,
      page: newPage,
    });
    setAdditionalArticles([...additionalArticles, ...result.data]);
  };

  return (
    <>
      {additionalArticles.map((article) => (
        <ArticleTeaser key={article.identifier} article={article} />
      ))}

      {meta.hasMore && <LoadMoreButton onClick={loadNextPage} />}
    </>
  );
};

const LoadMoreButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="mx-auto flex items-center gap-2 transition-colors duration-300 group text-xl">
      <span className="transform transition-transform duration-300 group-hover:rotate-90 text-gray-400 group-hover:text-black">
        +
      </span>
      <span className="mr-2">Load more</span>
    </button>
  );
};

export default LoadMoreArticles;
