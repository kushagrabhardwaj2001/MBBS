const mongoose=require('mongoose')
const blogSchema = new mongoose.Schema({
   title:{
    type:String
   },
   date:{
    type:String
   },
   description:{
    type:String
   },
   image:{
    type:String
   },
  }, { collection: 'blogsData' });
  module.exports = mongoose.model('blogsData', blogSchema);
