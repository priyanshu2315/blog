const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

router.get('/' , homeController.home );

router.use('/user' , require('./user.js'))

router.use('/blog' , require('./blog'));


module.exports = router;