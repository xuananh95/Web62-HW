const express = require("express");
const contactRouter = require("./routes/contacts");
const userRouter = require("./routes/users");
const cors = require("cors");

const checkAdminMiddleware = require("./middlewares/checkAdmin");
const logMiddleware = require("./middlewares/log");
const app = express();
const PORT = 3001;

// Middlewares
app.use(cors("*"));
app.use(express.json());
app.use(logMiddleware);
app.use("/contacts", contactRouter);
app.use("/users", userRouter);

app.get("/admin", checkAdminMiddleware, (req, res) => {
    res.send("Welcome to admin page");
});

const middleWareVongSoLoai = (req, res, next) => {
    if (true) {
        console.log("Qua được vòng sơ loại rồi,.... Go Go");
        next();
    }
};

const middleWareVongBang = (req, res, next) => {
    if (true) {
        console.log("Qua được vòng bảng rồi,.... Go Go");
        next();
    }
};
const middleWareVong1_16 = (req, res, next) => {
    if (true) {
        console.log("Qua được vòng 1/16 rồi,.... Go Go");
        next();
    }
};

app.get(
    "/lay-cup-ve-brasil",
    middleWareVongSoLoai,
    middleWareVongBang,
    middleWareVong1_16,
    (req, res) => {
        res.json({
            msg: "Winnnn, mang cúp về nước đê",
        });
    }
);

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`);
});
