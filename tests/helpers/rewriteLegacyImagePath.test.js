import { rewrite } from '~/helpers/rewriteLegacyImagePath';

describe('Legacy Image Rewriter', () => {
  test.each([
    ['<img src="/a.jpg" />', '<img src="/a.jpg">'],
    [
      '<img data-no-retina src="/a.jpg" />',
      '<img data-no-retina="" src="/a.jpg">',
    ],
    [
      '<img data-no-retina src="/i/a.jpg" />',
      '<img data-no-retina="" src="/content/images/i/a.jpg">',
    ],
    ["<img src='/a.jpg' />", '<img src="/a.jpg">'],
    ["<img src='/i/a.jpg' />", '<img src="/content/images/i/a.jpg">'],
    [
      "<img src='/test/1/i/a.jpg' />",
      '<img src="/test/1/content/images/i/a.jpg">',
    ],
    ["<img src='/i/i/a.jpg' />", '<img src="/content/images/i/i/a.jpg">'],
    ["<img src='/ia.jpg' />", '<img src="/ia.jpg">'],
    ["<img src='/i.jpg' />", '<img src="/i.jpg">'],
    [
      "<img src='https://host.com/i/a.jpg' />",
      '<img src="https://host.com/content/images/i/a.jpg">',
    ],
    [
      '<img src="https://host.com/content/images/i/a.jpg">',
      '<img src="https://host.com/content/images/i/a.jpg">',
    ],
    ['<h1>test</h1>', '<h1>test</h1>'],
  ])('Handles %s', (html, out) => {
    expect(rewrite(html)).toEqual(out);
  });
});
