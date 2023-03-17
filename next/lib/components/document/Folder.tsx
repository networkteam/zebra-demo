import { useRouter } from 'next/router';

import BackendOnlyPage from './BackendOnlyPage';

const DocumentFolder = () => {
  const router = useRouter();

  return <BackendOnlyPage prefix={router.locale === 'de' ? 'Ordner' : 'Folder'} />;
};

export default DocumentFolder;
