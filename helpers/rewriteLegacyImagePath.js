/* eslint-disable unicorn/no-null */
import * as cheerio from 'cheerio';

export default (html) => {
  const $ = cheerio.load(html, null, false);
  $('img').each(function doRewriting() {
    const source = $(this).attr('src');

    if (
      source &&
      source.includes('/i/') &&
      !source.includes('/content/images/i/')
    ) {
      $(this).attr('src', source.replaceAll('/i/', '/content/images/i/'));
    }
  });
  return $.html();
};
