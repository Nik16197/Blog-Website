const express = require('express');

const Post = require('../models/posts');

const router = express.Router();

router.post("/", async (req, res) => {
    const newPost = new Post(req.body);

    try {

        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (e) {
        res.status(500).json(e);
    }
})


router.put("/:id", async (req, res) => {

    const postId = req.params.id;
    const post = await Post.findById(postId);

    if (req.body.username === post.username) {

        try {

            const updatedPost = await Post.findByIdAndUpdate(

                req.params.id,
                { $set: req.body },
                { new: true }
            )
            res.status(200).send(updatedPost)

        } catch (e) {
            res.status(500).json(e);
        }
    } else {
        res.status(401).json("Invalid user")
    }
})

router.delete('/:id', async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {

            try {

                await post.delete();
                res.status(200).json("Post deleted")

            } catch (e) {
                res.status(500).json(e)
            }

        } else {
            res.send(401).json("Invalid user")
        }
    } catch (e) {
        res.status(500).json(e)
    }
})

router.get('/:id', async (req, res) => {
    try {

        const post = await Post.findById(req.params.id)

        const { password, ...others } = post._doc;
        res.status(200).json(others)


    } catch (e) {
        res.status(500).json(e)
    }
})

router.get("/", async (req, res) => {

    const username = req.query.user;
    const cats = req.query.cat;
    cats = "Allrounder";
    try {

        let posts;

        if (username) {
            posts = await Post.find({ username })
        } else if (cats) {
            posts = await Post.find({
                categories: {
                    $in: [cats],
                },
            })
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router;