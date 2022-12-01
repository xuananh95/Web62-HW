const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

// data
let contacts = [
    {
        id: "a8fa5bee-cb01-4fb0-8465-e8b820567000",
        name: "Jill Johnson",
        email: "jill@gmail.com",
        phone: "111-111-1111",
        type: "personal",
    },
    {
        id: "770f7bd7-f960-4a9f-be40-67621e415bb6",
        name: "Sara Watson",
        email: "sara@gmail.com",
        phone: "222-222-2222",
        type: "personal",
    },
    {
        id: "f53cc6d7-86f5-460a-9c2c-bbadc0450507",
        name: "Harry White",
        email: "harry@gmail.com",
        phone: "333-333-3333",
        type: "professional",
    },
];

// middlewares
const isExists = (req, res, next) => {
    const name = req.body.name;
    const existed = contacts.find((el) => el.name === name);
    if (existed === undefined) {
        next();
    } else {
        res.json({
            msg: "Username already existed!",
            status: 400,
        });
    }
};
const checkIDExist = (req, res, next) => {
    const id = req.params.id;
    const foundID = contacts.findIndex((el) => el.id.toString() === id);
    if (foundID === -1) {
        res.json({
            msg: "Invalid id",
            status: 400,
        });
    } else {
        next();
    }
};

// routes
router.get("/", (req, res) => {
    res.json({
        data: contacts,
        status: 200,
    });
});

router.get("/:id", checkIDExist, (req, res) => {
    const contact = contacts.find((el) => el.id === req.params.id);
    res.json({
        data: contact,
        status: 200,
    });
});

router.post("/", isExists, (req, res) => {
    const newID = uuidv4();
    const newContact = { id: newID, ...req.body };
    contacts.push(newContact);
    res.json({
        msg: "New contact added successfully!",
        status: 200,
    });
});

router.put("/:id", checkIDExist, (req, res) => {
    const newContact = {
        id,
        ...req.body,
    };
    contacts[foundID] = newContact;
    res.json({
        msg: "Contact updated successfully",
        status: 200,
    });
});

router.delete("/:id", checkIDExist, (req, res) => {
    contacts = contacts.filter((el) => el.id !== req.params.id);
    res.json({
        msg: "Contact deleted successfully",
        status: 200,
    });
});

module.exports = router;
