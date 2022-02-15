var express = require('express')


var app = express();

var router = express.Router();

app.use(express.json())

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