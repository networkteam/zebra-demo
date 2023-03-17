import { useNode } from '@networkteam/zebra';

const DocumentBackendOnlyPage = ({ prefix, children }: { prefix?: string; children?: React.ReactNode }) => {
  const node = useNode();

  return (
    <div className="flex min-h-screen items-center justify-center bg-dark">
      <div className="text-3xl font-medium text-white">
        {prefix && `${prefix}: `}
        {children || node.properties.title}
      </div>
    </div>
  );
};

export default DocumentBackendOnlyPage;
