require("dotenv").config();
const mongoose = require("mongoose");
// const dbUrl = `mongodb+srv://${process.env.DATABASE_USSERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.sqmep40.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
const dbUrl = `mongodb+srv://ajaykumartpss:BvfZXlKgEF4fZ52P@cluster0.sqmep40.mongodb.net/tpss-store?retryWrites=true&w=majority`;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB database");
});

module.exports = mongoose;
