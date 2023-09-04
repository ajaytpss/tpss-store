const product = require("../models/product");

const addProduct = async (req, res) => {
  try {
    const Product = new product(req.body);
    await Product.save();
    res.status(200).json({ msg: "Product added successfully!" });
  } catch (error) {
    res.status(403).json({ msg: error.errors });
  }
};

module.exports = addProduct;
