const mongoose = require("mongoose");
const stdSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollno: {
    type: Number,
    required: true,
  },
  div: {
    type: String,
    enum: ["T1", "T2"],
  },
  branch: {
    type: String,
    enum: ["Comps", "IT", "AI & DS"],
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
});
// Create std model
const Std = mongoose.model("Std", stdSchema);
module.exports = Std;
