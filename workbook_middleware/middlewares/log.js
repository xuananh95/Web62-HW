const fs = require("fs");
const data = require("../data/userdata");

const logRequest = (req, res, next) => {
    const date = new Date();
    const userKey = req.query.key;
    const path = req.path.toString().slice(1);
    const foundUser = data["userData"].find((el) => el.apiKey === userKey);
    console.log(`New request coming to route ${path} at ${date}`);
    if (foundUser !== undefined) {
        const rawData = JSON.parse(fs.readFileSync("./data/logs.json"));
        let logsData = rawData["data"];
        const indexUserInLog = logsData.findIndex(
            (el) => el.user === foundUser.username
        );

        // log the number of user visited a route to file
        if (indexUserInLog === -1) {
            const newUserLog = {
                user: foundUser.username,
                student: 0,
                teacher: 0,
                subject: 0,
            };
            newUserLog[path] += 1;
            logsData.push(newUserLog);
            const content = JSON.stringify({ data: logsData });
            fs.writeFileSync("./data/logs.json", content);
        } else {
            logsData[indexUserInLog][path] += 1;
            const content = JSON.stringify({ data: logsData });
            fs.writeFileSync("./data/logs.json", content);
        }
    }
    next();
};

module.exports = logRequest;
