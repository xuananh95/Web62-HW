const express = require("express");
const logRequest = require("./middlewares/log");
const checkApiKey = require("./middlewares/checkApiKey");
const fs = require("fs");

const data = [
    { username: "alice", apiKey: "alice@123" },
    { username: "bob", apiKey: "bob@123" },
    { username: "charlie", apiKey: "charlie@123" },
];

const app = express();
const PORT = 5000;

app.get("/student", logRequest, checkApiKey, (req, res) => {
    res.json("student route");
});

app.get("/teacher", logRequest, checkApiKey, (req, res) => {
    res.json("teacher route");
});

app.get("/subject", logRequest, checkApiKey, (req, res) => {
    res.json("subject route");
});

app.get("/system/statistic", (req, res) => {
    const rawData = JSON.parse(fs.readFileSync("./data/logs.json"));
    let logsData = rawData["data"];
    res.json(logsData);
});

app.listen(PORT, () => {
    console.log("server running at port", PORT);
});
