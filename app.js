var express = require('express');
var app = express();
var router = require('./router')
var bodyparser = require('body-parser')
require('dotenv').config({path:__dirname+'\\.env'})
var Port = process.env['PORT']

app.use(bodyparser.json({limit:"50mb"}))
app.use('/', router);
app.listen(Port);