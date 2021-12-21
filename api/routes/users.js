const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require('bcrypt');


// Update User
router.put('/:id', async (req, res) => {
    if (req.body.userid === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json("You can update only your account !");
    }

});

// Delete User ( this delete api can now delete any user but update it so that a person can delete himself only)
router.delete('/:id', async (req, res) => {
        try{
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({ username : user.username })
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted");
            } catch (err) {
                res.status(500).json(err);
            }
        } catch(err) { res.status(404).json("User not found");}

});

// Get User 
router.get("/:id" , async (req , res) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router