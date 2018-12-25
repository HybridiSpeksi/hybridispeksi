FROM node:9.5

RUN npm install

RUN mkdir /app
WORKDIR /app

CMD node webpack-dev-server --host 0.0.0.0 --config ./webpack/dev.config.js
