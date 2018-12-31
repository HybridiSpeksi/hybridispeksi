FROM node:9

RUN mkdir /app
WORKDIR /app

# ADD ./ ./
RUN npm install -g nodemon


CMD npm run server
