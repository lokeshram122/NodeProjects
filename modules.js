const e = require('express');
var mongoose = require('mongoose');
const Schema = mongoose.Schema;


async function login(req,res){
   
    var URI=process.env['MongoDBURI'];
    var connection = await mongoose.connect(URI,{useNewUrlParser: true})

    try{
        var User = mongoose.model('users')
    }
    catch(err)
    {
        var User = mongoose.model('users',
        new Schema({ name: String, age: Number, gender: String,password:String}));
    }
    

    var UserName = req.body?.UserName;
    var Password = req.body?.Password;
    
    if(UserName != undefined && Password != undefined)
    {

        var userslist = await User.find({name:UserName,password:Password});
        let message;
        if(userslist.length > 0)
        {
          message ="Login SucessFull "+UserName
        }
        else
        {   
          message ="Login Failed"
        }
        res.send(message)
    }
    else
    {
        res.send("please provide the username,password")
    } 
  
}

function about(req, res) {
    //await User.updateMany({},{$set:{password:"New Password"}}); // for updating collection
    res.send('Welcome home '+req.body?.UserName);
}

async function register(req,res){

    var URI=process.env['MongoDBURI'];
    var connection = await mongoose.connect(URI,{useNewUrlParser: true})

    var UserName = req.body?.UserName;
    var Age = req.body?.Age;
    var Gender = req.body?.Gender;
    var Password = req.body.Password;

    try{
        var User = mongoose.model('users')
    }
    catch(err)
    {
        var User = mongoose.model('users',
        new Schema({ name: String, age: Number, gender: String,password:String}));
    } 

    if(UserName != undefined && Age != undefined && Gender != undefined && Password != undefined)
    {

        var userslist = await User.find({name:UserName});
        let message;
        if(userslist.length > 0)
        {
          message ="UserName already exists"
        }
        else
        {   
         
          response = await User.insertMany({name:UserName,age:Age,gender:Gender,password:Password})
          message ="Registered successfully "+UserName
        }
        res.send(message)
    }
    else
    {
        res.send("please provide the username,age,gender!")
    } 
    
}


module.exports = {login,about,register}