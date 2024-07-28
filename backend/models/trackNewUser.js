const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  ipAddress: {
    type: String,
    required: true
  }
});

const TrackUser = mongoose.model('trackUser', userSchema);

module.exports = TrackUser;
