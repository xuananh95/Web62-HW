const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const dbConfig = "mongodb://localhost:27017/web62-mongo";
        const connect = await mongoose.connect(dbConfig);
        console.log(`Mongo connected: ${connect.connection.host}`);
    } catch (e) {
        console.log("Error", e);
    }
};

module.exports = connectDB;
