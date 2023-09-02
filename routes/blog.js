const express = require('express');
const router = express.Router();
const blogController = require('../controller/blog_controller');


router.get('/blog-form' , blogController.blogform)

router.get('/show-blog/:id' , blogController.showblog)

router.post('/create-blog' , blogController.createblog)

router.get('/update-form/:id' , blogController.updateform)

router.post('/update/:id' , blogController.update)

router.get('/delete/:id' , blogController.delete)

module.exports = router;

