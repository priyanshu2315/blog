const User = require('../models/user');

module.exports.signin = function(req , res){
    if(req.isAuthenticated()){
        return res.redirect('/')
    }
    return res.render('sign-in')
}

module.exports.signup = function(req , res){
    if(req.isAuthenticated()){
        return res.redirect('/')
    }
    return res.render('sign-up');
}

module.exports.createuser = async function(req , res){
    await User.create(req.body);
    return res.redirect('/')
}

module.exports.createsession = function(req , res){
     console.log(req.user.id); 
    return res.redirect('/');
}

module.exports.profile = async function(req , res){
   let user =  await User.findById(req.params.id);
   return res.render('profile' , {
    user: user
   })
}

module.exports.signout = function(req , res){
    req.logout(function(err){
        if(err){
            console.log('erro in signinig out');
        }
        return res.redirect('/');
    })
}