const express = require("express");
const router = express.Router();
const Assignment = require("./../models/assignment");
router.post("/classwork", async (req, res) => {
  try {
    const data = req.body;
    const assignment1 = new Assignment(data);
    const response = await assignment1.save();
    console.log("Assignment data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: `Assignment error` });
  }
});
router.get("/classwork", async (req, res) => {
  try {
    const data = await Assignment.find();
    console.log("Assign data fetched");
    res.status(200).json(data);
  } catch (err) {
    res.send("irror");
    console.log(err);
  }
});
router.get("/", (req, res) => {
  res.send("This is Exp dashboard");
});
router.get("/classwork/:subName", async (req, res) => {
  try {
    const subName = req.params.subName;
    if (subName == "DWM" || subName == "CN" || subName == "AI") {
      const data = await Assignment.find({ sub_name: subName });
      res.status(200).json(data);
    } else {
      res.status(500).json({ err: "subName error" });
    }
  } catch (err) {
    res.status(404).json({ err: "Def subName error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const exp = req.params.id;
    const updatedExp = req.body;
    const response = await Assignment.findByIdAndUpdate(exp, updatedExp, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(400).json({ err: "No exp found" });
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ err: "error through catch" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const exp = req.params.id;
    const response = await Assignment.findByIdAndDelete(exp);
    if (!response) {
      res.status(400).json({ Err: "no exp found" });
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(404), json({ Err: "Error caught" });
  }
});
module.exports = router;
