FROM node:8

RUN groupadd -r nodejs && useradd -m -r -g -s /bin/bash nodejs nodejs
USER nodejs

WORKDIR /var/www/hybridispeksi

COPY package*.json ./
RUN npm install --production
COPY . .
ENV NODE_ENV production

EXPOSE 8080

CMD ["npm", "start"]
