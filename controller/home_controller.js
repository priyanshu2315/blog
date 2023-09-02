const Blog = require('../models/blog');

module.exports.home = async function(req , res){
    let blogs = await Blog.find({}).populate('user')


    return res.render('home' , {
        blogs: blogs
    })
}