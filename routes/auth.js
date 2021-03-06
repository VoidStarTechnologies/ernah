const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/auth/google' }),
    (req, res) => {
      res.redirect('/');
    });

  app.get('/api/user', (req, res) => {
    res.send(req.user);
  });

  app.get('/signout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
