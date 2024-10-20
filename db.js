const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/class";
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
