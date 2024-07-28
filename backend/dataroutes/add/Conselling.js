const express = require("express");
const { ConsellingModel } = require("../../models/Conselling");
const router = express.Router();

router.get("/get-conselling", async (req, res) => {
    try {
      let conselling = await ConsellingModel.find();
      res.status(200).send({
        conselling: conselling,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

router.post("/add-conselling", async (req, res) => {
  const { name, email, phone, educationLevel, educationInterest } = req.body;
  console.log(req.body);
  try {
    const conselling = await new ConsellingModel({ name, email, phone, educationLevel, educationInterest});
    await conselling.save()
    res.status(200).json({
      message: "Add Form in Backend",
      conselling: conselling,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
