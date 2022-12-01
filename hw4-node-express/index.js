const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();

const contactData = [
    {
        id: 1,
        name: "Jill Johnson",
        email: "jill@gmail.com",
        phone: "111-111-1111",
        type: "personal",
    },
    {
        id: 2,
        name: "Sara Watson",
        email: "sara@gmail.com",
        phone: "222-222-2222",
        type: "personal",
    },
    {
        id: 3,
        name: "Harry White",
        email: "harry@gmail.com",
        phone: "333-333-3333",
        type: "professional",
    },
];
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.json(contactData);
});

app.get("/:id", (req, res) => {
    const isExist = contactData.find(
        (el) => el.id.toString() === req.params.id
    );
    if (isExist !== undefined) {
        res.json({
            message: isExist,
            code: 200,
        });
    } else {
        res.json({
            message: "not found",
            code: 404,
        });
    }
});

app.post("/", (req, res) => {
    console.log(req.body);
    const id = uuidv4();
    const newContact = {
        id,
        ...req.body,
    };
    contactData.push(newContact);
    res.send(contactData);
});

app.listen(5000, () => {
    console.log("Server running at port 5000");
});
