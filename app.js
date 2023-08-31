const express = require("express");
const bodyParser = require("body-parser");
const admin_routes = require("./src/routes/adminRoute");
const product_routes = require("./src/routes/product");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.send("Welcome to TPSS Store");
});

app.use("/api/admin", admin_routes);
app.use("/api/admin", product_routes);

app.listen(PORT);
