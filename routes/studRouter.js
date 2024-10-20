const express = require("express");
const router = express.Router();
const Student = require("./../models/person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newStd = new Student(data);
    const response = await newStd.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: `Internal Server Error in post` });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await Student.find();
    console.log("data fetchedd");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: `Internal Server Error` });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const std = req.params.id;
    const updatedStd = req.body;
    const response = await Student.findByIdAndUpdate(std, updatedStd, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(500).json({ err: "No std found" });
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ err: "irror" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const std = req.params.id;
    const response = await Student.findByIdAndDelete(std);
    if (!response) {
      res.status(400).json({ err: "no std found" });
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ err: "error from catch" });
  }
});
module.exports = router;
