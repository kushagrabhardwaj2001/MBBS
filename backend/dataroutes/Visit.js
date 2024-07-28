const express = require("express");
const { VisitModel } = require("../models/Visitor");
const visitRouter = express.Router();

visitRouter.get("/visitor/count", async (req, res) => {
  try {
    let visitor = await VisitModel.findOne();
    if (!visitor) {
      visitor = new VisitModel();
    }
    visitor.count++;
    await visitor.save();
    res.json({ count: visitor.count });
  } catch (error) {
    console.error("Error updating visitor count:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  visitRouter,
};
