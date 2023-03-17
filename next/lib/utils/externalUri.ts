export const isExternalUri = (uri: string) => {
  return uri.startsWith('http://') || uri.startsWith('https://');
};
