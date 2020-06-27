import { getAbsoluteUrl } from '~/helpers/seo';

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
