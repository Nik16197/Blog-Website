const express = require('express');
const User = require('../models/user')
const bcrypt = require('bcrypt')

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        const userCreated = await newUser.save();
        res.status(200).json(userCreated);

    } catch (e) {
        res.status(500).json(e);
    }
})

router.post("/login", async (req, res) => {
    try {

        const user = await User.findOne({ username: req.body.username });
        !user && res.status(400).json("Wrong credentials");

        // const validate = await bcrypt.compare(req.body.password, user.password);
        // !validate && res.status(400).json("Wrong credentials");

        const { password, ...others } = user._doc;
        res.status(200).json(user);
        // res.end();

    } catch (e) {
        return res.status(500).json(e)
    }
})

module.exports = router;
