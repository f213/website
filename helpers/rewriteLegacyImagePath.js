import * as cheerio from 'cheerio';

export function rewrite(html) {
  const $ = cheerio.load(html, null, false);
  $('img').each(function doRewriting() {
    const src = $(this).attr('src');

    if (src.includes('/i/') && !src.includes('/content/images/i/')) {
      $(this).attr('src', src.replaceAll('/i/', '/content/images/i/'));
    }
  });
  return $.html();
}
