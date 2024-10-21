const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
const profRoutes = require("./routes/profRouter");
const studRoutes = require("./routes/studRouter");
const expRoutes = require("./routes/expRoutes");
require("dotenv").config();
app.use(bodyParser.json()); //req.body
app.get("/", (req, res) => {
  res.send("Welcome to classroom");
});
app.use("/classroom", studRoutes);
app.use("/prof", profRoutes);
app.use("/exp", expRoutes);
console.log("hii how u doing");
//hello there
const PORT = process.env.PORT || 5000;
app.listen(PORT);
