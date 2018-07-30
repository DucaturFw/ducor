module.exports = {
  apps : [
    {
      name      : 'ducor-front',
      script    : '../ducor-frontend/server/index.ts',
      env: {
        NODE_ENV: 'development',
        DUCOR_FRONT_PORT: 3090
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'ducor-back',
      script: '../ducor-backend/src/app.ts'
    }
  ],

  // deploy : {
  //   development: {
  //     'pre-setup': 'setup.sh'
  //   },
  //   production : {
  //     // user : 'node',
  //     // host : '212.83.163.1',
  //     // ref  : 'origin/master',
  //     // repo : 'git@github.com:repo.git',
  //     // path : '/var/www/production',
  //     // 'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
  //   }

  // }
};
