const mongoose = require("../db/db");

const { Schema, model } = mongoose;

const productSchema = new Schema({
  adminId: { type: String },
  title: { type: String, default: "Unknown" },
  rattings: { type: Number, default: 0 },
  sizes: { type: Array, default: "M" },
  quantity: { type: Number, default: 1 },
  discription: { type: String, required: true },
  price: { type: Number, reqired: true },
  onsale: { type: Boolean },
  onsalePrice: { type: Number },
  categories: { type: String, default: "uncategorized" },
  subCategory: { type: String },
  featuredImage: { type: String },
  colors: { type: Array },
});

const addProduct = model("product", productSchema);

module.exports = addProduct;
