const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

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
    const { username, password } = req.body;

    // check user exist
    if (!username || !password) {
        return res.status(401).json({
            msg: "Missing required keys!",
        });
    }

    const existedUser = users.find(
        (el) => el.username === username && el.password === password
    );
    if (!existedUser) {
        return res.status(400).json({
            msg: "Invalid credentials",
        });
    }
    // create token
    delete existedUser.password;
    const payload = { ...existedUser };
    const token = jwt.sign(payload, SECRET_KEY, {
        expiresIn: EXPIRE_IN,
    });

    // response to client
    return res.status(200).json({
        isAuthenticated: true,
        token: token,
    });
});

module.exports = router;
