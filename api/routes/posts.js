const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");


// Create Post
router.post("/" , async ( req , res) => {
    const newPost = new Post( req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch ( err ){
        res.status(500).json(err);
    }
})

// Update Post
router.put("/:id", async (req , res) => {
    const post = await Post.findById(req.params.id);
    if( post.username === req.body.username){
        try{
            const updatedPost = await Post.findByIdAndUpdate(
                req.params.id,
                {
                    $set : req.body
                },
                { new : true}
            );
            res.status(200).json(updatedPost);
        } catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(401).json("You can update only your posts");
    }
})

// Delete Post ( delete the post using id --- Note : a delete method can not have a message body)
router.delete("/:id", async (req , res) => {
    try{

        const post = await Post.findById(req.params.id);
            try{
                await post.delete();
                res.status(200).json("Post has been deleted");
            } catch(err){
                res.status(500).json(err);
            }
    } catch (err){
        res.status(500).json(err);
    }
})

// Get post 
router.get("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json(err);
    }
})


module.exports = router