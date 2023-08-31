const mongoose = require("../db/db");

const { Schema, model } = mongoose;

const adminSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 18, max: 100 },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  image: { type: String, required: true },
  role: { type: String, default: "Editor" },
  password: { type: String, min: 6, required: true },
});

const admin = model("admin", adminSchema);

module.exports = admin;
