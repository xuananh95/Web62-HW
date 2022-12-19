const express = require("express");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const JWT_SECRET = process.env.JWT_SECRET;
const ACCESS_JWT_EXPIRE_IN = process.env.ACCESS_JWT_EXPIRE_IN;
const REGISTER_JWT_EXPIRE_IN = process.env.REGISTER_JWT_EXPIRE_IN;

const users = [
    {
        id: "1",
        username: "cr7",
        password: "cr7123",
        email: "cr7@mu.com",
        isAdmin: false,
        activated: true,
    },
    {
        id: "2",
        username: "messi",
        password: "messi123",
        email: "messi@paris.com",
        isAdmin: false,
        activated: true,
    },
    {
        id: "3",
        username: "admin",
        password: "admin123",
        email: "admin@gmail.com",
        isAdmin: true,
        activated: true,
    },
];

const router = express.Router();

router.post("/login", (req, res) => {
    const { username, pwd } = req.body;
    if (!username || !pwd) {
        res.status(401).json({
            msg: "Missing required fields!",
        });
        return;
    }

    const existedUser = users.find(
        (el) => el.username === username && el.password === pwd
    );
    if (!existedUser) {
        res.status(401).json({
            msg: "Invalid credentials",
        });
        return;
    }
    const { password, ...payload } = existedUser;
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: ACCESS_JWT_EXPIRE_IN,
    });
    res.status(200).json({
        msg: "Log in successful!",
        token: token,
    });
});

router.post("/register", (req, res) => {
    const { username, pwd, email } = req.body;
    if (!username || !pwd) {
        res.status(401).json({
            msg: "Missing required field!",
        });
    } else {
        const isUserExisted = users.some((el) => el.username === username);
        if (isUserExisted) {
            res.status(401).json({
                msg: "Username already existed!",
            });
        } else {
            const id = uuidv4();
            const newUser = {
                isAdmin: false,
                activated: false,
                password: pwd,
                id,
                username,
                email,
            };
            const { password, ...payload } = newUser;
            const regToken = jwt.sign(payload, JWT_SECRET, {
                expiresIn: REGISTER_JWT_EXPIRE_IN,
            });
            users.push(newUser);
            res.status(200).json({
                msg: "User added successfully!",
                payload: regToken,
            });
        }
    }
});

router.post("/register-confirm", (req, res) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
        const token = req.headers.authorization.split(" ")[1];
        try {
            const user = jwt.verify(token, JWT_SECRET);
            const existedUser = users.find((el) => el.id === user.id);
            if (!existedUser) {
                res.status(404).json({
                    msg: "User not found!",
                });
                res.end();
                return;
            } else if (existedUser.activated === true) {
                res.status(401).json({
                    msg: "User already activated",
                });
                res.end();
                return;
            } else {
                existedUser.activated = true;
                res.status(200).json({
                    msg: "User activated!",
                });
                res.end();
                return;
            }
        } catch (error) {
            res.status(401).json({
                msg: error.message,
            });
            res.end();
            return;
        }
    } else {
        res.status(403).json({
            msg: "Missing token",
        });
    }
});

router.get("/", (req, res) => {
    res.json({
        users,
    });
});

module.exports = router;
