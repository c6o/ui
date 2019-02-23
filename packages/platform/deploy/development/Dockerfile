FROM node:11-slim as builder
LABEL stage=intermediate
WORKDIR /usr/src

RUN npm install -g lerna del-cli
COPY . .
RUN npm install
RUN lerna link
RUN lerna bootstrap
RUN lerna run build --scope=@traxitt/platform

# Remove the symlink to @traxitt/common and copy it over
RUN rm -fv packages/platform/node_modules/@traxitt/common
RUN cp -Rafv packages/common/lib packages/platform/node_modules/@traxitt/common
RUN cp -afv packages/common/package.json packages/platform/node_modules/@traxitt/common/

FROM node:11-alpine

WORKDIR /app/platform

COPY --from=builder /usr/src/packages/platform/package.json .
COPY --from=builder /usr/src/packages/platform/lib/ ./lib
COPY --from=builder /usr/src/packages/platform/config/ ./config
COPY --from=builder /usr/src/packages/platform/node_modules/ ./node_modules
RUN npm rebuild

ENV DEBUG=*
ENV NODE_CONFIG_DIR=/app/platform/config

EXPOSE 3030
CMD [ "npm", "start" ]