FROM keymetrics/pm2:latest-alpine

WORKDIR /usr/app/

# Install deps
COPY ./package* ./
RUN npm install --production && \
  npm cache clean --force
RUN npm install -g pm2
COPY . .

RUN npm run build
# CMD npm start
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
