FROM node:9-alpine

WORKDIR /usr/app/

# Install deps
COPY ./package* ./
RUN npm install --production && \
  npm cache clean --force
COPY . .

RUN npm run build
CMD npm start
