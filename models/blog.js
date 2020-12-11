const mongoose = require("mongoose");
const config = require("../config/db");

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    publishedAt: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    visible: {
        type: Boolean,
        default: true
    }
})

const Blog = module.exports = mongoose.model("Blog", BlogSchema);

module.exports.getBlogs = function(query, callback) {
    Blog.find(query, callback);
}

module.exports.getBlogById = function(blogId, callback) {
    const query = { _id: blogId };
    Blog.findOne(query, callback)
}

module.exports.addBlog = function(blog, callback) {
    blog.save(callback);
}

module.exports.updateBlog = function(blogId, blog, callback) {
    const query = { _id: blogId };
    Blog.findOneAndUpdate(query, blog, callback);
}

module.exports.deleteBlog = function(blogId, callback) {
    const query = { _id: blogId };
    Blog.findOneAndDelete(query, callback);
}