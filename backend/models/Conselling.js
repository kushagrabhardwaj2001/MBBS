const mongoose = require("mongoose");
const consellingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    educationInterest: {
      type: String,
    },
    educationLevel: {
      type: String,
    },
  },
);
const ConsellingModel = mongoose.model("conselling", consellingSchema);
module.exports = {
    ConsellingModel,
};

