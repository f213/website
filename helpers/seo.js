export const getMeta = (entity) => {
  const meta = [];
  if (entity.meta_description) {
    meta.push({
      hid: 'description',
      name: 'description',
      content: entity.meta_description,
    });
  }
  return meta;
};
