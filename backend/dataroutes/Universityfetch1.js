const express = require("express");
const app = express.Router();
const University = require("../models/University");
const University1 = require("../models/University1");

app.get("/state/:state", async (req, res) => {
  try {
    const state = req.params.state.replace("%20", " "); // Replace %20 with space
    console.log("Fetching universities for state:", state); // Add this line
    const universities = await University.find({ state });

    res.status(200).json(universities);
  } catch (error) {
    console.error("Error fetching universities:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;
