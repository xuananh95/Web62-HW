const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authMdw = require("../middlewares/authMdw");

const users = [
    {
        id: "1",
        username: "cr7",
        password: "cr7123",
        email: "cr7@mu.com",
    },
    {
        id: "2",
        username: "messi",
        password: "messi123",
        email: "messi@paris.com",
    },
    {
        id: "3",
        username: "admin",
        password: "admin123",
        email: "admin@gmail.com",
    },
];
const SECRET_KEY = process.env.JWT_SECRET_KEY;
const EXPIRE_IN = process.env.JWT_EXPIRE_IN;

router.post("/login", (req, res) => {
    // validation
    const username = req.body.username;
    const pwd = req.body.password;

    // check user exist
    if (!username || !pwd) {
        return res.status(401).json({
            msg: "Missing required keys!",
        });
    }

    const existedUser = users.find((el) => {
        return el.username === username && el.password === pwd;
    });
    console.log(existedUser);
    if (!existedUser) {
        return res.status(400).json({
            msg: "Invalid credentials",
        });
    }
    // create token
    const { password, ...payload } = existedUser;
    const token = jwt.sign(payload, SECRET_KEY, {
        expiresIn: EXPIRE_IN,
    });

    // response to client
    return res.status(200).json({
        isAuthenticated: true,
        token: token,
        user: payload,
    });
});

router.get("/", authMdw, (req, res) => {
    const { user } = req.user;
    res.json({
        user,
    });
});

module.exports = router;
