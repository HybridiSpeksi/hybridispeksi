FROM node:9.5


RUN mkdir /app
WORKDIR /app

# ADD ./ ./
# RUN npm install
RUN npm install -g webpack-dev-server

CMD npm run dev
