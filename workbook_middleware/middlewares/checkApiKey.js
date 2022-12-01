const data = require("../data/userdata");

const keys = data["userData"].map((el) => el.apiKey);

const checkApiKey = (req, res, next) => {
    const apiKey = req.query.key;
    const isExist = keys.find((el) => el === apiKey);
    if (isExist) {
        next();
    } else {
        res.json("Invalid API Key!");
    }
};

module.exports = checkApiKey;
