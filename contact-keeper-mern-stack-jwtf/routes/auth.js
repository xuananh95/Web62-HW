const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')

const users = [
    {
        id: "1", username:"cr7", password:"abc123", email:"abc123@gmail.com"
    },
    {
        id: "2", username:"cr8", password:"abc123", email:"abc123@gmail.com"
    },
    {
        id: "3", username:"cr9", password:"abc123", email:"abc123@gmail.com"
    }
]

const SECRET_KEY = process.env.JWT_SECRET_KEY || "secretkey";

router.post('/login', (req, res) => {
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(401).json({
            msg: "Missing required key",
        })
    }
    const foundUser = users.find(el => el.username === username && el.password === password);
    if (!foundUser) {
        return res.status(400).json({
            msg: "User is not exist!",
        })
    }
    delete foundUser.password;
    const token = jwt.sign(foundUser, SECRET_KEY, {expiresIn: 60 * 60 * 24});



    console.log(req.body);
    res.json(token);
});

module.exports = router;