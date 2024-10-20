const mongoose = require("mongoose");
const assignSchema = new mongoose.Schema({
  sub_name: {
    type: String,
    enum: ["DWM", "CN", "AI"],
    required: true,
  },
  exp_no: {
    type: Number,
    required: true,
  },
  exp_detail: {
    type: String,
  },
  due_date: {
    type: String,
    required: true,
  },
  no_of_sub: {
    type: Number,
    default: 0,
  },
  std_submitted: {
    type: [String],
    default: [],
  },
});
const Exps = mongoose.model("Exps", assignSchema);
module.exports = Exps;
