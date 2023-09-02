const express = require('express');
const router = express.Router();
const userController = require('../controller/user_controller');
const passport = require('passport');


router.get('/sign-in'  , userController.signin)

router.get('/sign-up' , userController.signup)

router.post('/create-user' , userController.createuser)

router.post('/create-session'  , passport.authenticate('local' , {
    failureRedirect: '/'
}), userController.createsession);

router.get('/profile/:id' , userController.profile)

router.get('/sign-out' , userController.signout)

router.get('/auth/google' , passport.authenticate('google' , {scope: ['profile' , 'email']}))

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/sign-in' }), userController.createsession);


module.exports = router;