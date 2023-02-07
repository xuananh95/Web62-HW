const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
    building: String,
    coord: [Number, Number],
    street: String,
    zipcode: String,
});

const rateSchema = mongoose.Schema({
    date: Date,
    rate: String,
    score: Number,
});

const restaurantSchema = mongoose.Schema({
    address: addressSchema,
    borough: String,
    cuisine: String,
    rates: [rateSchema],
    name: String,
    restaurant_id: String,
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
