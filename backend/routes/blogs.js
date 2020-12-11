const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

// Retrieve all blogs
router.get("/", function(req, res){
    let filterQuery;
    if(req.query.cat == undefined || req.query.cat == 'All') {
        filterQuery = {}
    }else {
        filterQuery = {category: req.query.cat};
    }
    Blog.getBlogs(filterQuery, (err, blogs) => {
        if(err) throw err;
        res.json({
            success: true,
            data: blogs
        })
    })
});

// Get blog by Id
router.get("/:id", function(req, res){
    const id = req.params.id;
    Blog.getBlogById(id, (err, blog) => {
        if(err) throw err;
        if(blog == null) {
            res.status(400);
            res.send({
                success: false,
                msg: "Blog not found"
            })
        }else {
            res.json({
                success: true,
                data: blog
            })
        }
    })
});

// Add new blog
router.post("/add", function(req, res, next){
    const newBlog = new Blog({
        title: req.body.title,
        body: req.body.body,
        imageUrl: req.body.imageUrl,
        category: req.body.category.toLowerCase(),
        publishedAt: req.body.publishedAt,
        author: req.body.author
    });

    Blog.addBlog(newBlog, (err, blog) => {
        if(err) {
            res.status(400);
            res.json({success: false, msg: "Blog addition failed"});
        }else {
            res.json({success: true, msg: "Blog successfully added"});
        }
    })
});

// Update a blog
router.patch("/update/:id", function(req, res, next) {
    const id = req.params.id;
    Blog.updateBlog(id, req.body, (err, blog) => {
        if(err) throw err;
        if(blog == null) {
            res.status(400);
            res.json({
                success: false,
                msg: "Blog not found"
            })
        }else {
            res.json({
                success: true,
                msg: "Blog has been updated"
            })
        }
    })
});

// Delete a blog
router.delete("/delete/:id", function(req, res, next) {
    const id = req.params.id;
    Blog.deleteBlog(id, (err, blog) => {
        if(err) throw err;
        if(blog == null) {
            res.status(400);
            res.json({
                success: false,
                msg: "Blog not found"
            })
        }else {
            res.json({
                success: true,
                msg: "Blog has been deleted"
            })
        }
    })
});

module.exports = router;