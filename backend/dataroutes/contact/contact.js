const express = require("express");
// const contactModel = require('../../models/contact');
const nodemailer = require("nodemailer");
const { ContactsModel } = require("../../models/contact");
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

router.post("/contact", async (req, res) => {
  const { name, email, mobile, description } = req.body;
  console.log(req.body);
  console.log("email:", email);

  const mailoptions = {
    from: "info@mbbsdunia.com", // sender's email address
    to: "mbbsduniadelhi@gmail.com", // replace with the actual recipient's email address
    subject: "Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nDescription: ${description}`,
  };

  try {
    await transporter.sendMail(mailoptions);
    const contact = new ContactsModel({
      name,
      email,
      mobile,
      description,
    });
    await contact.save();
    res.status(200).json({ message: "Email sent successfully",contact:contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/contact-get",async(req,res)=>{
  try {
    const contact= await ContactsModel.find()
    res.status(200).json({contact:contact})
  } catch (error) {
    res.status(500).json({message:"somthing went wrong"})
  }
})

module.exports = router;
