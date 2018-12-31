FROM node:9.5

RUN npm install
RUN npm install -g webpack-dev-server

RUN mkdir /app
WORKDIR /app

ADD ./ ./

CMD npm run dev
