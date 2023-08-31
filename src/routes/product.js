const express = require("express");
const router = express.Router();

const addProduct = require("../controller/addProductCon");
const editProduct = require("../controller/editProductCon");

router.route("/add-product").post(addProduct);
router.route("/edit-product").put(editProduct);

module.exports = router;
