FROM node:9

RUN mkdir /app
WORKDIR /app

RUN npm install && npm install -g nodemon

ADD ./ ./

CMD npm run server
