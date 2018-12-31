# HybridiSpeksi

Website project for HybridiSpeksi ry and it's yearly theatre production.

## Tech stack

Client is a React application with Redux state management. Backen is a Node REST server with Express.js. MongoDB. Production application runs on Digitalocean using Docker containers.

## Requirements
Docker

## Development setup

1. Fork the repository from github: https://github.com/HybridiSpeksi/hybridispeksi
2. Clone your for to your local environment: 
```
    $ git clone https://github.com/<yourUsername>/hybridispeksi
```
3. Go to root folder: 
```
    $ cd hybridispeksi
```
4. Populate env variables. Add .dev_vars-env -file to project root, you'll get it from web admins.

5. Install dependencies. Docker-compose will use node_modules for molumes.
```
    $ npm install
```
5. Run project in development mode with docker-compose:
```
    docker-compose up
```
8. Start developing. No bugs pls, only perfect code.

## Deployment

// TODO

