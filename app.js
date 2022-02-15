var express = require('express')
var bodyparser = require('body-parser')


var app = express();

var router = express.Router();


app.use(bodyparser.json({limit:"50mb"}))

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.post("/",(req,res)=>{
    res.send("Hello " +req.body?.UserName)
})



var server = app.listen(5000,()=>
{
    console.log("listening to server " + server.address().port)
})