const express = require("express");
const connectDB = require("./config/db");
const RestaurantModel = require("./models/restaurant.model");

connectDB();
const app = express();

app.listen(5000, () => {
    console.log(`server running at port 5000`);
});
