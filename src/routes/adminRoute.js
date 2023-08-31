const express = require("express");
const router = express.Router();

const { adminLogin, adminSignup } = require("../controller/adminCon");

router.route("/signup").post(adminSignup);
router.route("/login").post(adminLogin);

module.exports = router;
