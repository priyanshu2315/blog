const Blog = require('../models/blog');

module.exports.createblog = async function(req , res){
    await Blog.create({
        img: req.body.img,
        title: req.body.title,
        content: req.body.content,
        user: req.user._id
    })
    return res.redirect('/')
} 

module.exports.blogform = function(req , res){
    return res.render('blog-form');
} 

module.exports.showblog = async function(req , res){
    let blog = await Blog.findById(req.params.id).populate('user')
    return res.render('show-blog' , {
        blog: blog
    })
}

module.exports.update = async function(req , res){
    const updatedBlog = await Blog.findOneAndUpdate(
        { _id: req.params.id },
        {
          img: req.body.img,
          title: req.body.title,
          content: req.body.content,
        },
        { new: true }
      );
    
      if (!updatedBlog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
    
      // Redirect to the homepage (or any other desired URL) after successful update
      return res.redirect('/');
}

module.exports.updateform  = async function(req , res){
    let blog = await Blog.findById(req.params.id);
    return res.render('update-form' , {
        blog: blog
    });
}


module.exports.delete = async function(req , res){
    await Blog.deleteOne({_id: req.params.id});
    return res.redirect('/')
}