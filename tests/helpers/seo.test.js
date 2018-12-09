import { getMeta, getAbsoluteUrl } from '~/helpers/seo';

describe('getMeta helper', () => {
  it('Returns non when there is no meta', () => {
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


describe('getAbsoluteUrl helper', () => {
  let page;

  beforeEach(() => {
    process.env.absoluteHost = 'https://test.com';
    page = {
      url: '/slug/',
    };
  });

  it('Actualy adds the absolute url', () => {
    expect(getAbsoluteUrl(page)).toEqual('https://test.com/slug/');
  });

  it('Does not add the host when page already contains it', () => {
    page = {
      url: 'https://microsoft.com/money',
    };

    expect(getAbsoluteUrl(page)).toEqual('https://microsoft.com/money');
  });
});
