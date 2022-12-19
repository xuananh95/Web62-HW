const jwt = require("jsonwebtoken");

const { NORMAL_USER, REGISTERED_USER, ADMIN } = require("../types");
const JWT_SECRET = process.env.JWT_SECRET;

const checkPermission = (req, res, next) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
        const token = req.headers.authorization.split(" ")[1];
        try {
            const user = jwt.verify(token, JWT_SECRET);
            if (user.activated === false) {
                req.userType = NORMAL_USER;
                next();
            }
            if (user.isAdmin) {
                req.userType = ADMIN;
            } else {
                req.userType = REGISTERED_USER;
            }
        } catch (error) {
            res.status(401).json({
                msg: error.message,
            });
            res.end();
            return;
        }
    } else {
        req.userType = NORMAL_USER;
    }
    next();
};

module.exports = checkPermission;
