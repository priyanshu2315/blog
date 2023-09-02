const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(new LocalStrategy({
    usernameField:'email',
    passReqToCallback: true,
    },
    async function(req , email, password, done){
      //find the user and stablish the identity
      
      let user = await User.findOne({email: email});
      
      if(!user || user.password != password ){
          req.flash('error', 'Invalid Username/ Password');
          return done(null, false);
      }
      return done(null, user);

      
  }
))



 passport.serializeUser(function(user, cb) {
   
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  
    User.findById(id, function (err, user) {
        if (err) { return cb(err); }
        cb(null, user);
    });
});
passport.setAuthenticateduser=function(req , res , next){
    // console.log(`req.session passport  ${req.session.passport.user}`);
    // console.log(`from set authenticated user ${req.user}`);
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
} 
 
module.exports = passport;