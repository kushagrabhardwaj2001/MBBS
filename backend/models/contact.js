const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  description: {
    type: String,
  },
});
const ContactsModel = mongoose.model("contactus", contactSchema);
module.exports = { ContactsModel };
