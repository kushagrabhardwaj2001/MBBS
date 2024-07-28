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
// GET all universities
app.get("/universities", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const universities = await University.find().skip(skip).limit(limit);
    const totalDocuments = await University.countDocuments();

    res.status(200).json({
      universities,
      totalPages: Math.ceil(totalDocuments / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching universities:", error);
    res.status(500).json({ message: "Internal server error" });
  }
})

app.get("/search/universities", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    let query = {};
    if (req.query.search) {
      query = { collegename: { $regex: req.query.search, $options: "i" } };
    }

    const universities = await University.find(query)
      .skip(skip)
      .limit(limit);
    const totalDocuments = await University.countDocuments(query);

    res.status(200).json({
      universities,
      totalPages: Math.ceil(totalDocuments / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching universities:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET a university by ID
app.get("/universities/:id", async (req, res) => {
  try {
    const university = await University.findById(req.params.id);
    if (!university) {
      return res.status(404).json({ message: "University not found" });
    }
    res.status(200).json(university);
  } catch (error) {
    console.error("Error fetching university by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// PATCH/update a university by ID
app.patch("/universities/:id", async (req, res) => {
  try {
    const university = await University.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!university) {
      return res.status(404).json({ message: "University not found" });
    }
    res.status(200).json(university);
  } catch (error) {
    console.error("Error updating university:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



// DELETE a university by ID
app.delete("/universities/:id", async (req, res) => {
  try {
    const university = await University.findByIdAndDelete(req.params.id);
    if (!university) {
      return res.status(404).json({ message: "University not found" });
    }
    res.status(200).json({ message: "University deleted successfully" });
  } catch (error) {
    console.error("Error deleting university:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;
