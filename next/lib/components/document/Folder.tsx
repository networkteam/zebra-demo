import { ContextProps } from '@networkteam/zebra';

import BackendOnlyPage from './BackendOnlyPage';

const DocumentFolder = async ({ ctx }: { ctx: ContextProps }) => {
  // TODO Add dynamic locale support
  const locale: string = 'en';

  return <BackendOnlyPage ctx={ctx} prefix={locale === 'de' ? 'Ordner' : 'Folder'} />;
};

export default DocumentFolder;
