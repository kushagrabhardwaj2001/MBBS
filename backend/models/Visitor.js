const mongoose = require("mongoose");

const VisitorSchema = mongoose.Schema({
  count: { type: Number, default: 0 },
});

const VisitModel = mongoose.model("visit", VisitorSchema);
module.exports = {
  VisitModel,
};
