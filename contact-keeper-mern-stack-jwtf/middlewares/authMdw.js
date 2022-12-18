const jwt = require("jsonwebtoken");
const authMwd = (req, res, next) => {
    const token = req.headers["x-auth-token"];
    if (!token) {
        return res.status(400).json({
            msg: "No token, authorization denied",
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (decoded) {
            next();
        }
    } catch (err) {
        return res.status(401).json({
            msg: "Invalid token",
        });
    }
};

module.exports = authMwd;
