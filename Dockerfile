FROM node:20-alpine

ENV NODE_ENV=production

RUN apk add --no-cache wget dumb-init && rm -Rf /var/cache/apk/*

COPY . /srv
WORKDIR /srv

RUN npm ci

ENTRYPOINT ["/usr/bin/dumb-init", "--"]

HEALTHCHECK CMD wget -q -O /dev/null http://localhost:3000 || exit 1

CMD ["node", "./server.js"]



