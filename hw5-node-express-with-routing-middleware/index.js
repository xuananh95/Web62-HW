const express = require("express");
const contactRouter = require("./routes/contactRouter");

const PORT = 5000;
app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        msg: "Homepage",
        code: 200,
    });
});
app.use("/contacts", contactRouter);

app.listen(PORT, () => {
    console.log("Server running at port", PORT);
});
