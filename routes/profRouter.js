const express = require("express");
const router = express.Router();
const Prof = require("./../models/prof");
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const prof = new Prof(data);
    const response = await prof.save();
    console.log("Prof data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Prof error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await Prof.find();
    console.log("Professor data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});
router.get("/:subType", async (req, res) => {
  try {
    const subType = req.params.subType;
    if (
      subType == "AI" ||
      subType == "DWM" ||
      subType == "BCE" ||
      subType == "Stats"
    ) {
      const data = await Prof.find({ sub: subType });
      res.status(200).json(data);
    } else {
      res.status(200).json({ err: "Invalid sub" });
    }
  } catch (err) {
    res.status(500).json({ err: "Prof error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const prof = req.params.id;
    const updatedProf = req.body;
    const response = await Prof.findByIdAndUpdate(prof, updatedProf, {
      new: true,
      runValidators: true,
    });
    if (!response) {
      return res.status(500).json({ err: "No Prof found" });
    }
    console.log("prof updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(501).json({ err: "Irror" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const prof = req.params.id;
    const response = await Prof.findByIdAndDelete(prof);
    if (!response) {
      return res.status(400).json({ err: "No prof found" });
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ err: "Error caught by catch" });
  }
});
module.exports = router;
