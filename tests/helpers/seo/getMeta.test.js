import { getMeta } from '~/helpers/seo';

describe('getMeta helper', () => {
  it('Returns none when there is no meta', () => {
    const post = { meta_description: null };
    expect(getMeta(post)).toEqual([]);
  });
  it('Returns description when is present meta_description', () => {
    const post = { meta_description: 'Грузите апельсины бочками' };
    expect(getMeta(post)[0]).toEqual({
      hid: 'description',
      name: 'description',
      content: 'Грузите апельсины бочками',
    });
  });
  it('Returns description when is present og_description', () => {
    const post = { og_description: 'Грузите апельсины бочками' };
    expect(getMeta(post)[0]).toEqual({
      hid: 'description',
      name: 'description',
      content: 'Грузите апельсины бочками',
    });
  });
  it('Returns description when is present twiiter_description', () => {
    const post = { twiiter_description: 'Грузите апельсины бочками' };
    expect(getMeta(post)[0]).toEqual({
      hid: 'description',
      name: 'description',
      content: 'Грузите апельсины бочками',
    });
  });
  it('Returns description when is present excerpt', () => {
    const post = { excerpt: 'Грузите апельсины бочками' };
    expect(getMeta(post)[0]).toEqual({
      hid: 'description',
      name: 'description',
      content: 'Грузите апельсины бочками',
    });
  });
  it('Returns one description when is present multiple description fields in post', () => {
    const post = {
      meta_description: 'Грузите апельсины бочками',
      og_description: 'Узнаю брата Колю',
      excerpt: 'Пилите, Шура, пилите, они золотые',
      twiiter_description: 'Пиво отпускается только членам профсоюза',
    };
    expect(getMeta(post).length).toEqual(1);
  });
  it('Is javascript-proof', () => {
    const post = null;
    expect(getMeta(post)).toEqual([]);
  });
});
