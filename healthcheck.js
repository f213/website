/* Simple node.js healthcheck tool.
 *
 * Usage:
 *  node /healthcheck.js HOST PORT PATH CODE
 *
 * e.g.
 *  node /healthcheck.js testhost.my.company 3000 / 200
 *
 * Connection always goes to localhost
 *
 */
/* eslint-disable import/no-extraneous-dependencies, unicorn/no-process-exit, eqeqeq, no-console */
const http = require('node:http');

const [host, port, path, code] = process.argv.slice(2);

const options = {
  timeout: 1000,
  host: 'localhost',
  port,
  path,
  headers: {
    host,
  },
};

const request = http.request(options, (res) => {
  console.log('HEALTHCHECK STATUS:', res.statusCode);
  process.exitCode = res.statusCode == code ? 0 : 1;
  process.exit();
});

request.on('error', (error) => {
  console.error('HEALTHCHECK ERROR', error);
  process.exit(1);
});

request.end();
