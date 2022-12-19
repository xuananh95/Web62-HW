const express = require("express");
const checkPermission = require("../middlewares/checkPermission");
const { v4: uuidv4 } = require("uuid");

const { NORMAL_USER, REGISTERED_USER, ADMIN } = require("../types");

const filmRouter = express.Router();

const movies = [
    {
        id: "1",
        name: "Titanic",
        isFree: true,
    },
    {
        id: "2",
        name: "Avenger",
        isFree: false,
    },
    {
        id: "3",
        name: "Iron Man",
        isFree: false,
    },
    {
        id: "4",
        name: "Batman",
        isFree: false,
    },
    {
        id: "5",
        name: "Iron Man 2",
        isFree: false,
    },
    {
        id: "6",
        name: "Iron Man 3",
        isFree: false,
    },
    {
        id: "7",
        name: "Tenet",
        isFree: false,
    },
    {
        id: "8",
        name: "Inception",
        isFree: true,
    },
];

filmRouter.get("/", checkPermission, (req, res) => {
    switch (req.userType) {
        case REGISTERED_USER:
            res.status(200).json({
                msg: "Movies retrieved successful!",
                payload: movies,
            });
            break;

        case ADMIN:
            res.status(200).json({
                msg: "Movies retrieved successful!",
                payload: movies,
            });
            break;

        default:
            const responseData = movies.filter((el) => el.isFree === true);
            res.status(200).json({
                msg: "Movies retrieved successful!",
                payload: responseData,
            });
    }
});

filmRouter.post("/", checkPermission, (req, res) => {
    switch (req.userType) {
        case ADMIN:
            const { name, isFree } = req.body;
            if (!name || isFree === undefined) {
                res.status(401).json({
                    msg: "Missing required field!",
                });
            } else {
                const id = uuidv4();
                const newMovie = {
                    id,
                    name,
                    isFree,
                };
                movies.push(newMovie);
                res.status(200).json({
                    msg: "New movie added successfully!",
                    payload: newMovie,
                });
            }
            break;

        default:
            res.status(403).json({
                msg: "No permission!",
            });
    }
});

filmRouter.put("/:id", checkPermission, (req, res) => {
    switch (req.userType) {
        case ADMIN:
            const id = req.params.id;
            const movieIndex = movies.findIndex((el) => el.id === id);
            if (movieIndex === -1) {
                res.status(404).json({
                    msg: "ID not found!",
                });
                return;
            }
            const { name, isFree } = req.body;
            if (!name || isFree === undefined) {
                res.status(401).json({
                    msg: "Missing required field!",
                });
            } else {
                movies[movieIndex].name = name;
                movies[movieIndex].isFree = isFree;
                res.status(200).json({
                    msg: "Movie updated successfully!",
                    payload: movies[movieIndex],
                });
            }
            break;

        default:
            res.status(403).json({
                msg: "No permission!",
            });
    }
});

filmRouter.delete("/:id", checkPermission, (req, res) => {
    switch (req.userType) {
        case ADMIN:
            const id = req.params.id;
            const movieIndex = movies.findIndex((el) => el.id === id);
            if (movieIndex === -1) {
                res.status(404).json({
                    msg: "ID not found!",
                });
                return;
            }
            movies.splice(movieIndex, 1);
            res.status(200).json({
                msg: "Movie deleted successfully!",
            });
            break;
        default:
            res.status(403).json({
                msg: "No permission!",
            });
    }
});

module.exports = filmRouter;
