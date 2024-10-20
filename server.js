const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
const profRoutes = require("./routes/profRouter");
const studRoutes = require("./routes/studRouter");
const expRoutes = require("./routes/expRoutes");
app.use(bodyParser.json()); //req.body
app.use("/classroom", studRoutes);
app.use("/prof", profRoutes);
app.use("/exp", expRoutes);
console.log("hii how u doing");
app.listen(5000);
