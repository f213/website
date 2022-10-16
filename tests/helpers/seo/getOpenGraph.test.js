import { getOpenGraph } from '~/helpers/seo';

describe('getOpenGraph helper', () => {
  let page;

  beforeEach(() => {
    process.env.absoluteHost = 'https://test.com';
    page = {
      slug: 'slug',
      title: 'Грузите апельсины бочками',
    };
  });

  it('Adds og:type = article, when page is post', () => {
    expect(getOpenGraph(page)).toContainEqual({
      property: 'og:type',
      content: 'article',
    });
  });

  it('Does not add og:type = article when page is not a post', () => {
    page.page = true;
    expect(getOpenGraph(page)).not.toContainEqual({
      property: 'og:type',
      content: 'article',
    });
  });

  it('Builds correct url', () => {
    expect(getOpenGraph(page)).toContainEqual({
      property: 'og:url',
      content: 'https://test.com/slug/',
    });
  });

  it('Uses post title for og:title', () => {
    expect(getOpenGraph(page)).toContainEqual({
      property: 'og:title',
      content: 'Грузите апельсины бочками',
    });
  });

  it('Uses meta title for og:title if present', () => {
    page.meta_title = 'Графиня изменившимся лицом бежит пруду';
    expect(getOpenGraph(page)).toContainEqual({
      property: 'og:title',
      content: 'Графиня изменившимся лицом бежит пруду',
    });
  });
  it('Uses meta title for og:title if present', () => {
    page.og_title = 'Графиня изменившимся лицом бежит пруду';
    page.meta_title = 'test';

    expect(getOpenGraph(page)).toContainEqual({
      property: 'og:title',
      content: 'Графиня изменившимся лицом бежит пруду',
    });
  });
  it('Does not contain og:description if not present', () => {
    expect(getOpenGraph(page)).not.toContainEqual({
      property: 'og:description',
      content: 'test',
    });
  });
  it('Adds meta:description from property', () => {
    page.meta_description = 'test';
    expect(getOpenGraph(page)).toContainEqual({
      property: 'og:description',
      content: 'test',
    });
  });
  it('Preferes og_description over meta_description', () => {
    page.meta_description = 'test1';
    page.og_description = 'test2';
    expect(getOpenGraph(page)).toContainEqual({
      property: 'og:description',
      content: 'test2',
    });
  });
  it('Adds og:image', () => {
    page.og_image = 'https://test.jpg';
    expect(getOpenGraph(page)).toContainEqual({
      property: 'og:image',
      content: 'https://test.jpg',
    });
  });
});
