import { NeosNode } from '@networkteam/zebra/types';
import Link from 'next/link';

const ArticleTeaser = ({ article }: { article: NeosNode }) => {
  return (
    <div>
      <h2 className="text-4xl">
        <Link href={`/articles/${article.properties.uriPathSegment}`}>{article.properties.title}</Link>
      </h2>
    </div>
  );
};
export default ArticleTeaser;
