# Сайт borshev.com

[![CircleCI](https://circleci.com/gh/f213/website-frontend.svg?style=svg&circle-token=6b34beece0dbf72e0f3848ac0193b6842e270369)](https://circleci.com/gh/f213/website-frontend)

Это фронтенд для сайта borshev.com. В качестве бекенда используется [ghost](https://ghost.org).

Технологии:
* nuxt.js, express.js в качестве кастомного сервера
* PostCSS и [bulma](https://bulma.io)
* Тесты пишем на jest

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Deploy

Configuration environment variables
* `ABSOLUTE_HOST` — the main host name, like `https://borshev.com`
* `BACKEND_URL` — route to ghost instance, like 'https://f213.ghost.io' (thats mine!)
* `GHOST_API_KEY` — API key from [ghost custom integration](https://ghost.org/docs/content-api/#authentication) params
* `GHOST_ADMIN_API_KEY` — Admin key from that integration.
* `GHOST_RSS_PRIVATE_KEY` — Private key for RSS, General -> Advanced settings
