const express  = require('express');
const passport = require('passport');
const healthcheck = require('healthcheck-middleware');

class WebApp {
  constructor(app) {
    this.app = app;
    this.healthCheck();
    this.initServer();
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
