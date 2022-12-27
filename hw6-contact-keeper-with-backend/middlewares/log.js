const logMiddleware = (req, res, next) => {
    const currentDate = new Date();
    console.log(`New request is coming ${currentDate} to ${req.path}`);
    next();
};

module.exports = logMiddleware;
