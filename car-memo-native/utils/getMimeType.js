export default getMimeType = (ext) => {
  const mimeTypes = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    heic: 'image/heic',
    webp: 'image/webp',
    gif: 'image/gif',
    bmp: 'image/bmp',
  };
  return mimeTypes[ext.toLowerCase()] || 'application/octet-stream';
};
