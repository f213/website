export const getMeta = (entity) => {
  const DESC_FIELDS = [
    'meta_description',
    'og_description',
    'twiiter_description',
    'excerpt',
  ];

  const meta = [];
  if ([null, undefined].includes(entity)) {
    return meta;
  }

  const description = DESC_FIELDS.find(field => entity[field]);

  if (description) {
    meta.push({
      hid: 'description',
      name: 'description',
      content: entity[description],
    });
  }

  return meta;
};

export const getAbsoluteUrl = page => (!(page.url.includes('://')) ? process.env.absoluteHost + page.url : page.url);

function og(property, content) {
  return { property: `og:${property}`, content };
}

export const getOpenGraph = (entity) => {
  const meta = [];
  if ([null, undefined].includes(entity)) {
    return meta;
  }

  if (!entity.page) {
    meta.push(og('type', 'article'));
  }
  meta.push(og('url', getAbsoluteUrl(entity)));
  meta.push(og('title', [entity.og_title, entity.meta_title, entity.title].find(i => Boolean(i))));

  const description = [entity.og_description, entity.meta_description].find(i => Boolean(i));
  if (description) {
    meta.push(og('description', description));
  }

  if (entity.og_image) {
    meta.push(og('image', entity.og_image));
  }

  return meta;
};

export const getPrevNextLinks = (prev, next) => {
  const links = [];
  if (prev) {
    links.push({ rel: 'prev', href: prev });
  }
  if (next) {
    links.push({ rel: 'next', href: next });
  }
  return links;
};
