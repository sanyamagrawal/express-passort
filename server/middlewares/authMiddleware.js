const passport = require('passport');

const authMiddleware = () => {
  this.app.get('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));
}
