FROM node:20.14.0

ENV HOST 0.0.0.0
ENV PORT 3000
ENV NODE_ENV production
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

WORKDIR /srv
COPY healthcheck.js /

COPY package*.json /srv/
RUN npm ci --production=false --no-optional

COPY . /srv/

RUN npm run build && find .nuxt  -type f -name '*.js.map' -delete

ARG RELEASE
ENV SENTRY_RELEASE ${RELEASE}

RUN mkdir /nonexistent && chown nobody /nonexistent

HEALTHCHECK CMD node /healthcheck.js localhost 3000 / 301
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
USER nobody
CMD npm start
