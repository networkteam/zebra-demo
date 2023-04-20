import ContentHeadline from '../components/content/Headline';
import ContentHero from '../components/content/Hero';
import ContentImage from '../components/content/Image';
import ContentMulticolumn from '../components/content/MultiColumn';
import ContentReferences from '../components/content/References';
import ContentSection from '../components/content/Section';
import ContentStage from '../components/content/Stage';
import ContentText from '../components/content/Text';
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
  'Neos.NodeTypes:Text': ContentText,
  'Neos.NodeTypes:Image': ContentImage,
  'Neos.NodeTypes.ContentReferences:ContentReferences': ContentReferences,

  'Zebra.Site:Content.Stage': ContentStage,
  'Zebra.Site:Content.Hero': ContentHero,
  'Zebra.Site:Content.Section': ContentSection,
  'Zebra.Site:Content.MultiColumn': ContentMulticolumn,
  'Zebra.Site:Content.MultiColumn.Column': ContentMulticolumn.Column,
};
