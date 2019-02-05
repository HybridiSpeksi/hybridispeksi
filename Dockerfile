FROM keymetrics/pm2:10-alpine

WORKDIR /var/www/

# Install deps
COPY ./package* ./
COPY . .
COPY webpack webpack/
# COPY dist dist/
COPY assets src/assets
COPY ecosystem.config.js .

ENV NODE_ENV production

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python && \
  npm install pm2 node-gyp sequelize pg sequelize-cli -g

RUN npm install --production

RUN npm run build
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
