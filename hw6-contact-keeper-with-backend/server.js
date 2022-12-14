require("dotenv").config();
const express = require("express");
const contactRouter = require("./routes/contacts");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const cors = require("cors");

const checkAdminMiddleware = require("./middlewares/checkAdmin");
const logMiddleware = require("./middlewares/log");
const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(logMiddleware);
app.use("/contacts", contactRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

app.get("/admin", checkAdminMiddleware, (req, res) => {
    res.send("Welcome to admin page");
});

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`);
});
