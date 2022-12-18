require("dotenv").config();

const express = require("express");

const authRouter = require("./routes/auth");
const filmRouter = require("./routes/films");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/auth", authRouter);
app.use("/films", filmRouter);

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
