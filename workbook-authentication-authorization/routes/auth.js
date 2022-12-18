const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRE_IN = process.env.JWT_EXPIRE_IN;

const users = [
    {
        id: "1",
        username: "cr7",
        password: "cr7123",
        email: "cr7@mu.com",
        isAdmin: false,
    },
    {
        id: "2",
        username: "messi",
        password: "messi123",
        email: "messi@paris.com",
        isAdmin: false,
    },
    {
        id: "3",
        username: "admin",
        password: "admin123",
        email: "admin@gmail.com",
        isAdmin: true,
    },
];

router.post("/login", (req, res) => {
    console.log(req.body);
    const { username, pwd } = req.body;
    if (!username || !pwd) {
        res.status(401).json({
            msg: "Missing required fields!",
        });
    }

    const existedUser = users.find(
        (el) => el.username === username && el.password === pwd
    );
    if (!existedUser) {
        res.status(401).json({
            msg: "Invalid credentials",
        });
    }
    const { password, ...payload } = existedUser;
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRE_IN });
    res.status(200).json({
        msg: "Log in successful!",
        token: token,
    });
});

module.exports = router;
