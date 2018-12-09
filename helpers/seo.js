export const getMeta = (entity) => {
  const meta = [];
  if ([null, undefined].includes(entity)) {
    return meta;
  }
  if (entity.meta_description) {
    meta.push({
      hid: 'description',
      name: 'description',
      content: entity.meta_description,
    });
  }
  return meta;
};

export const getAbsoluteUrl = page => (!(page.url.includes('://')) ? process.env.absoluteHost + page.url : page.url);
