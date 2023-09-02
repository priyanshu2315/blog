const passport =  require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');
const crypto = require('crypto');

passport.use(new GoogleStrategy({
    clientID: '1030864330892-8hrc1u7dokgddihh5l7h642fk6mcg3hb.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL:  "http://localhost:3000/user/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({email: profile.emails[0].value}).exec(function(err , user){
        if(err){
            console.log('error from google auth '  , err);
            return;
        }
        if(user){
            return done(null , user)
        }
        else{
            User.create({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: crypto.randomBytes(20).toString('hex')
            }, function(err , user){
                if(err){
                    console.log('error in creating error');
                }
                return done(null , user);
            })
          }
    }) 

  }
));



module.exports = passport;