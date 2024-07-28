const express = require("express");
const contactModel = require("../../models/contact");
const nodemailer = require("nodemailer");
const router = express.Router();

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 587,
  secure: false,
  auth: {
    user: "info@mbbsdunia.com",
    pass: "Info@123*",
  },
});

router.post("/counseling", async (req, res) => {
  const { name, email, phone, educationLevel, educationInterest } = req.body;
  console.log(req.body);
  console.log("email:", email);

  const mailoptions = {
    from: "info@mbbsdunia.com", // sender's email address
    to: "mbbsduniadelhi@gmail.com", // replace with the actual recipient's email address
    subject: "Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${phone}\Education Level: ${educationLevel}\ Education Interest:${educationInterest}`,
  };

  try {
    await transporter.sendMail(mailoptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
