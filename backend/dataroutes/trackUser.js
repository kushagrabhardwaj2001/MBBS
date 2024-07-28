const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = express();
router.use(cookieParser());
// const VisitSchema = new mongoose.Schema({
//   ip: String,
//   timestamp: { type: Date, default: Date.now }
// });

// const Visit = mongoose.model('Visit', VisitSchema);

// const CountSchema = new mongoose.Schema({
//   totalCount: { type: Number, default: 0 },
//   todayCount: { type: Number, default: 0 },
//   lastUpdated: { type: Date, default: Date.now }
// });

// const Count = mongoose.model('Count', CountSchema);

// const incrementCount = async () => {
//   const count = await Count.findOne();
//   if (count) {
//     count.totalCount += 1;
//     count.todayCount += 1;
//     count.lastUpdated = new Date();
//     await count.save();
//   } else {
//     await Count.create({ totalCount: 1, todayCount: 1 });
//   }
// };

// router.get('/count', async (req, res) => {
//   const userIp = req.ip; // Get user's IP address
//   const currentTime = new Date();

//   // Check if there is a visit record for the user within the past 24 hours
//   const lastVisit = await Visit.findOne({
//     ip: userIp,
//     timestamp: { $gte: new Date(currentTime - 24 * 60 * 60 * 1000) }
//   });

//   if (!lastVisit) {
//     // If no visit record found, increment visit count and create new record
//     await Visit.create({ ip: userIp });
//     await incrementCount();
//   }

//   // Get the total visit count and today's visit count
//   const count = await Count.findOne();
//   const totalVisits = count ? count.totalCount : 0;
//   const todayVisits = count ? count.todayCount : 0;

//   res.json({ totalVisits, todayVisits });
// });

const VisitSchema = new mongoose.Schema({
  ip: String,
  timestamp: { type: Date, default: Date.now }
});

const Visit = mongoose.model('Visit', VisitSchema);

const CountSchema = new mongoose.Schema({
  totalCount: { type: Number, default: 0 },
  todayCount: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now }
});

const Count = mongoose.model('Count', CountSchema);

const incrementCount = async () => {
  let count = await Count.findOne();
  const currentDate = new Date();

  if (count) {
    const lastUpdated = new Date(count.lastUpdated);

    // Reset todayCount if last updated date is not today
    if (lastUpdated.toDateString() !== currentDate.toDateString()) {
      count.todayCount = 1;
    } else {
      count.todayCount += 1;
    }

    count.totalCount += 1;
    count.lastUpdated = currentDate;
    await count.save();
  } else {
    await Count.create({ totalCount: 1, todayCount: 1 });
  }
};

router.get('/count', async (req, res) => {
  const userIp = req.clientIp; // Get user's real IP address
  const currentTime = new Date();

  // Check if there is a visit record for the user within the past 24 hours
  const lastVisit = await Visit.findOne({
    ip: userIp,
    timestamp: { $gte: new Date(currentTime - 24 * 60 * 60 * 1000) }
  });

  if (!lastVisit) {
    // If no visit record found, increment visit count and create new record
    await Visit.create({ ip: userIp });
    await incrementCount();
  }

  // Get the total visit count and today's visit count
  const count = await Count.findOne();
  const totalVisits = count ? count.totalCount : 0;
  const todayVisits = count ? count.todayCount : 0;

  res.json({ totalVisits, todayVisits });
});

module.exports = router;
