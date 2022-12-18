const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET_KEY;

const authMdw = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(400).json({
            msg: "Missing token",
        });
    }
    if (!req.headers.authorization.includes("Bearer")) {
        return res.status(400).json({
            msg: "Missing token",
        });
    }
    const token = req.headers.authorization.split(" ")[1];
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        if (decoded) {
            req.user = decoded;
            next();
        }
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            res.status(401).json({
                msg: "Token expired!",
            });
        } else {
            res.status(401).json({
                msg: "Invalid token!",
            });
        }
    }
};

module.exports = authMdw;
