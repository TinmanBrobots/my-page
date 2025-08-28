const basePath = process.env.NODE_ENV === 'production' ? '/my-page' : '';

export const getAssetPath = (path: string): string => {
  return `${basePath}${path}`;
};

export const getInternalPath = (path: string): string => {
  return `${basePath}${path}`;
};