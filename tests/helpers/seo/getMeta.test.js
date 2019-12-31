import { getMeta } from '~/helpers/seo';

describe('getMeta helper', () => {
  it('Returns none when there is no meta', () => {
    const post = { meta_description: null };
    expect(getMeta(post)).toEqual([]);
  });
  it('Returns description when it is present', () => {
    const post = { meta_description: 'Грузите апельсины бочками' };
    expect(getMeta(post)[0]).toEqual({
      hid: 'description',
      name: 'description',
      content: 'Грузите апельсины бочками',
    });
  });
  it('Is javascript-proof', () => {
    const post = null;
    expect(getMeta(post)).toEqual([]);
  });
});
