var express = require('express');
var router = express.Router();
// var MongoClient=require('mongodb').MongoClient;
const mongoose = require("mongoose");

const uri = "mongodb://0.0.0.0:27017/"

async function connect(){
  try{
    await mongoose.connect(uri);
    console.log("Connected to MongoDB")
  } catch(error){
    console.error(error);
  }
}

connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit',function(req,res){
  console.log(req.body)


  // MongoClient.connect('mongodb://localhost:27017',function(err,client){
  //   if(err){
  //     console.log("error")
  //   }else{
  //     console.log("data base connected")
  //   }
  // })

  res.send('got it')
})

module.exports = router;
