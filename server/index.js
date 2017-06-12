const express  = require('express');
const passport = require('passport');
const healthcheck = require('healthcheck-middleware');

const dbMiddleware = require('./middlewares/dbMiddleware');

class WebApp {
  constructor(app) {
    this.app = app;
    this.healthCheck();
    this.initDB();
    this.initMiddleware();
    this.initServer();
  }

  healthCheck() {
    this.app.use('/ping', healthcheck());
  }

  initDB() {
    dbMiddleware();
  }

  initMiddleware() {

  }

  authMiddleware() {
    this.app.get('/login', passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    }));
  }

  initServer() {
    this.app.listen(3000, () => {
      console.log('Server started on port 3000');
    })
  }

}

module.exports = new WebApp(express());
