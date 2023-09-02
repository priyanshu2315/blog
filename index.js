const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }));
const passport = require('passport');
const LocalStrategy = require('./config/passport-local-strategies');
const GoogleStrategy = require('./config/passport-google-strategies');
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);

app.set('view engine' , 'ejs');


app.use(session({
    name: 'basic authentication app',
    secret: "vision",
    resave: true,
    saveUninitialized: true,
    cookie:{
        maxAge: (1000*60*100)
    },
    store: new mongoStore({
        mongooseConnection: db ,
        autoRemove: 'disabled'
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticateduser);


app.use(express.static('./assets'))


app.use('/' , require('./routes/index.js'));



app.listen(port , function(err){
    if(err){
        console.log('error in connecting to server');

    }
    console.log("Connecting to server at" , port);
})