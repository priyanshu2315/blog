const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    img:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    }  ,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }  
});

const blog= mongoose.model('blog' , blogSchema);
module.exports = blog; 