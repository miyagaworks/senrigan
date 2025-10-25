module.exports = {
  apps: [{
    name: 'senrigan-website',
    script: './server.ts',
    interpreter: 'tsx',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
};