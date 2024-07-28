const express = require("express");
const app = express();
const cors = require("cors");
const requestIp = require('request-ip');
port = process.env.PORT || 3100;
const adduniversity = require("./dataroutes/universities");
const fetchuniversity = require("./dataroutes/Universityfetch");
const University = require("./models/University");
const bodyParser = require("body-parser");
const registerUser = require("./dataroutes/add/User");
const imageRoute = require("./dataroutes/add/Blogs");
const contactRoute = require("./dataroutes/contact/contact");
const counselingRoutes = require("./dataroutes/contact/counseling.js");
const counselingFormRouter = require("./dataroutes/add/Conselling.js");
const cookieParser = require('cookie-parser');
app.use(cors());
app.options("*", cors());
app.use(cors({ origin: "*" }));
app.use(requestIp.mw()); 

(fs = require("fs")),
  (ccav = require("./ccavutil.js")),
  (qs = require("querystring")),
  (ccavReqHandler = require("./ccavRequestHandler.js")),
  (ccavResHandler = require("./ccavResponseHandler.js"));
app.use(express.static("public"));
app.set("views", __dirname + "/public");
app.engine("html", require("ejs").renderFile);

app.get("/pay", function (req, res) {
  res.render("dataFrom.html");
});

app.post("/ccavRequestHandler", function (request, response) {
  console.log(request.body);
  ccavReqHandler.postReq(request, response);
});

app.post("/ccavResponseHandler", function (request, response) {
  ccavResHandler.postRes(request, response);
});

const mongoose = require("mongoose");
const { visitRouter } = require("./dataroutes/Visit.js");
const TrackUser = require("./dataroutes/trackUser.js");

mongoose
  .connect(
    `mongodb+srv://batmanmasai:1234@cluster0.ujxtm0f.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to database MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.get("/api/college/:collegename", async (req, res) => {
  try {
    const collegename = req.params.collegename;

    // Fetch data for the specified college
    const collegeData = await University.findOne({ collegename });

    if (!collegeData) {
      return res.status(404).json({ message: "College not found" });
    }

    res.json(collegeData);
  } catch (error) {
    console.error("Error fetching college data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
const accountSid = "ACba4265321cf2a603b5f5efaf744e52a6";
const authToken = "cc2865608a6877e24160539bd810bb51";
app.use(bodyParser.json());
const client = require("twilio")(accountSid, authToken);
app.post("/api/send-otp", async (req, res) => {
  try {
    const mobile = req.body.phoneNumber;
    const verifySid = "VA209e876a36ecd064a76e52f16159af39";

    client.verify.services(verifySid)
      .verifications
      .create({ to: mobile, channel: "sms" })
      .then((verification) => {
        console.log(verification.status);
        res.status(200).json({verification:verification, success: true, message: "OTP sent successfully" });
      });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ success: false, error: "Failed to send OTP" });
  }
});
app.post("/api/verify-otp", async (req, res) => {
  try {
    const mobile = req.body.phoneNumber;
    const otpCode = req.body.otpCode;
    const verifySid = "VA209e876a36ecd064a76e52f16159af39";
    client.verify.services(verifySid)
      .verificationChecks
      .create({ to: mobile, code: otpCode })
      .then((verification_check) => {
        console.log(verification_check.status);
        if (verification_check.status === 'approved') {
          res.status(200).json({ success: true, message: "OTP verified successfully" });
        } else {
          res.status(400).json({ success: false, error: "OTP verification failed" });
        }
      });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ success: false, error: "Failed to verify OTP" });
  }
});

app.use("/api", adduniversity);
app.use("/api", fetchuniversity);
app.use("/api", registerUser);
app.use("/api", contactRoute);
app.use("/api", counselingRoutes);
app.use("/api", imageRoute);
app.use("/api", counselingFormRouter);
app.use(cookieParser());
app.use("/api",visitRouter)
app.use("/api",TrackUser)
 
app.listen(port, () => {
  console.log("server is running on port ", port);
});
