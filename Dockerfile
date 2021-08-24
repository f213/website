FROM node:16.5.0-buster
LABEL com.datadoghq.ad.logs='[{"source": "nuxt", "service": "nuxt"}]'
ENV HOST 0.0.0.0
ENV PORT 3000
ENV NODE_ENV development
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

WORKDIR /srv

COPY healthcheck.js /

ADD package.json yarn.lock /srv/
RUN yarn

ADD . /srv
RUN yarn build

ENV NODE_ENV production
HEALTHCHECK CMD yarn healthcheck
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD yarn start