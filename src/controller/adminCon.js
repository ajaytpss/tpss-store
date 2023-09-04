const admin = require("../models/admin");

const adminSignup = async (req, res) => {
  const tb = "kas";
  try {
    const checkAdmin = admin.find({
      email: req.body.email,
    });
    if (!checkAdmin) {
      const Admin = new admin(req.body);
      await Admin.save();
      res.status(200).send({ msg: req.body });
    } else {
      res.status(409).send({ msg: `User "${req.body.email}" already exists!` });
    }
  } catch (error) {
    res.status(400).send({ msg: error });
  }
};

const adminLogin = async (req, res) => {
  try {
    const data = await admin.find({
      email: req.body.email,
      password: req.body.password,
    });
    if (data) res.status(200).send({ Admins: data });
    else res.status(404).json({ message: "User not found!" });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
};

module.exports = { adminLogin, adminSignup };
