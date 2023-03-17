import ContentHeadline from '../components/content/Headline';
import ContentHero from '../components/content/Hero';
import ContentStage from '../components/content/Stage';
import DocumentFolder from '../components/document/Folder';
import DocumentPage from '../components/document/Page';
import DocumentShortcut from '../components/document/Shortcut';

export const nodeTypes = {
  // Documents
  'Zebra.Site:Document.RootPage': DocumentPage,
  'Zebra.Site:Document.Page': DocumentPage,
  'Zebra.Site:Document.Folder': DocumentFolder,
  'Zebra.Site:Document.NotFound': DocumentPage,
  'Neos.Neos:Shortcut': DocumentShortcut,

  // Content
  'Neos.NodeTypes:Headline': ContentHeadline,
  'Zebra.Site:Content.Stage': ContentStage,
  'Zebra.Site:Content.Hero': ContentHero,
};
