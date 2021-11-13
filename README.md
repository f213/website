# Сайт borshev.com

![CI](https://github.com/f213/website/actions/workflows/ci.yml/badge.svg) ![heroku](https://heroku-badge.herokuapp.com/?app=f213-frontend&svg=1)

Это фронтенд для сайта borshev.com. В качестве бекенда используется [ghost](https://ghost.org).

Технологии:
* nuxt.js
* express.js как обёртка для серверного рендеринга и BFF
* PostCSS и [bulma](https://bulma.io)
* Тесты пишем на jest

## Build Setup

``` bash
# install dependencies
$ npm ci

# serve with hot reload at localhost:3000
$ npm run dev
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Deploy

Configuration environment variables
* `ABSOLUTE_HOST` — the main host name, like `https://borshev.com`
* `BACKEND_URL` — route to ghost instance, like 'https://f213.ghost.io' (thats mine!)
* `GHOST_API_KEY` — API key from [ghost custom integration](https://ghost.org/docs/content-api/#authentication) params
* `GHOST_ADMIN_API_KEY` — Admin key from that integration.
* `GHOST_RSS_PRIVATE_KEY` — Private key for RSS, General -> Advanced settings
