const express = require("express");
const router = express.Router();
const BlogDataModel = require("../../models/BlogModel");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads1/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/uploadData1",
  upload.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    try {
      const { title, date, description, image } = req.body;

      console.log(req.body)

console.log(title, date, description, image)
      const blog = new BlogDataModel({
        title,
        date,
        description,
        image,
      });



      await blog.save();

      res.status(200).json({ message: "Data added successfully",blog });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);


router.post('/uploadBlog',async(req, res) => {
    const {title,description,date,image}=req.body
     try {
        const data= new BlogDataModel({title,description,date,image})
        await data.save()
        res.send({msg:"created data successfully"})
     } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Internal Server Error" });
     }
  });

  router.get("/blog/data",async(req,res)=>{
   try {
       const data = await BlogDataModel.find();
       res.status(200).send({data,msg:"successfull"})
  } catch (error) {
       console.error(error);
       res.status(500).json({ error: "Internal Server Error" });
  }
})
router.get("/blogdetail/:id",async(req,res)=>{
    try {
         const websiteData = await BlogDataModel.findById(req.params.id);
         if (!websiteData) {
             return res.status(404).json({ error: "No data found" });
         }
         res.json(websiteData);
     } catch (error) {
         res.status(500).json({ error: error.message });
     }
})

module.exports = router;
