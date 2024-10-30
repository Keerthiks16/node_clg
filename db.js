const mongoose = require("mongoose");
require("dotenv").config();
const mongoURL = process.env.MONGODB_URL;
//const mongoURL = process.env.MONGODB_URL_LOCAL;
//const mongoURL ="mongodb+srv://faizshinde:qwerty12345@mongo1.jwnjn.mongodb.net/";
mongoose
  .connect(mongoURL, {
    // useNewUrlParser and useUnifiedTopology are no longer necessary
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected to MongoDB Server");
});
db.on("error", (err) => {
  console.log("MongoDB Connection Error: ", err);
});
db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});
module.exports = db;
