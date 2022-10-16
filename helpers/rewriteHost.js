/* eslint-disable unicorn/no-null */
import * as cheerio from 'cheerio';

export default ({ html, from, to }) => {
  const $ = cheerio.load(html, null, false);
  $('a').each(function doRewriting() {
    const href = $(this).attr('href');

    if (href) {
      const newHref = href.replaceAll(from, to);
      if (newHref !== href) {
        $(this).attr('href', newHref);
      }
    }
  });
  return $.html();
};
