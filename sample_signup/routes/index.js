var express = require('express');
const { MongoClient } = require('mongodb');
var router = express.Router();
// var MongoClient=require('mongodb').MongoClient;
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

//db connection
const uri = "mongodb+srv://agile:agile123@cluster0.pwotyku.mongodb.net/?retryWrites=true&w=majority"

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



//schema

const schema = {
  name:String,
  email:String,
  password:String
}
const mongoDBmodel = mongoose.model("shopSense",schema);

//post

router.post('/submit',async function(req,res){
  console.log(req.body)

  res.send('got it')

  bcrypt.hash(req.body.password, 10,  async function(err, hashedPass) {
    if(err){
      res.json({
        error: err
      })
    }

    const data=new mongoDBmodel({
      name:req.body.name,
      email:req.body.email,
      password:hashedPass
    })

    const val = await data.save();
    // res.json(val);
  })

  // res.status(200).json(val)

});

router.get('/login', async function(req,res){
  var username= req.body.username
  var password = req.body.password

  mongoDBmodel.findOne({$or: [{email:username},{name:username}]})
  .then(user => {
    if(user){
      bcrypt.compare(password, user.password, function(err, result){
        if(err){
          res.json({
            error: err
          })
        }
        if(result){
          let token = jwt.sign({name: user.name}, 'verySecretValue',{expiresIn: '1h'})
          res.json({
            message: 'login Successful!',
            token
          })
        }else{
          res.json({
            message: 'password does not match'
          })
        }
      })
    }else{
      res.json({
        message: 'No user found!'
      })
    }
  })
})



module.exports = router;
