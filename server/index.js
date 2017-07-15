const express  = require('express');
const healthcheck = require('healthcheck-middleware');
const dbMiddleware = require('./middlewares/dbMiddleware');

class WebApp {
  constructor(app) {
    this.app = app;
    this.initDatabase();
    this.initMiddleware();
    this.initServer();
  }

  initDatabase() {
    dbMiddleware();
  }

  initMiddleware() {
    this.healthCheck();
  }

  healthCheck() {
    this.app.use('/ping', healthcheck());
  }

  initServer() {
    this.app.listen(3000, () => {
      console.log('Server started on port 3000');
    })
  }

}

module.exports = new WebApp(express());
