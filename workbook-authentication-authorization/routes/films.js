const express = require("express");
const checkPermission = require("../middlewares/checkPermission");

const { NORMAL_USER, REGISTERED_USER, ADMIN } = require("../types");

const filmRouter = express.Router();

const movies = [
    {
        id: 1,
        name: "Titanic",
        isFree: true,
    },
    {
        id: 2,
        name: "Avenger",
        isFree: false,
    },
    {
        id: 3,
        name: "Iron Man",
        isFree: false,
    },
    {
        id: 4,
        name: "Batman",
        isFree: false,
    },
    {
        id: 5,
        name: "Iron Man 2",
        isFree: false,
    },
    {
        id: 6,
        name: "Iron Man 3",
        isFree: false,
    },
    {
        id: 7,
        name: "Tenet",
        isFree: false,
    },
    {
        id: 8,
        name: "Inception",
        isFree: true,
    },
];

filmRouter.get("/", checkPermission, (req, res) => {
    switch (req.userType) {
        case REGISTERED_USER:
            break;

        case ADMIN:
            break;

        default:
            const responseData = movies.filter((el) => el.isFree === true);
            res.status(200).json({
                msg: "Movies retrieved successful!",
                payload: responseData,
            });
    }
});

module.exports = filmRouter;
