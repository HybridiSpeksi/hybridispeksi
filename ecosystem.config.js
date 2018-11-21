module.exports = {
  apps: [{
    name: 'server',
    script: 'server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 3,
    autorestart: true,
    watch: false,
  }],
};
