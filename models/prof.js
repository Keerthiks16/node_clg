const mongoose = require("mongoose");
const profSchema = new mongoose.Schema({
  prof_id: {
    type: Number,
    required: true,
    unique: true,
  },
  prof_name: {
    type: String,
    required: true,
  },
  sub: {
    type: String,
    enum: ["AI", "DWM", "BCE", "Stats"],
    required: true,
  },
});
const Prof = mongoose.model("Prof", profSchema);
module.exports = Prof;
