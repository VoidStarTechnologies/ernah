const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { googleKeys } = require('../config/keys');

passport.use(new GoogleStrategy({
  clientID: googleKeys.clientID,
  clientSecret: googleKeys.clientSecret,
  callbackURL: '/auth/google/callback',
},
((accessToken, refreshToken, profile, done) => {
  // User.findOrCreate({ googleId: profile.id }, (err, user) => done(err, user));
})));
