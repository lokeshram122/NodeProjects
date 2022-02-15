var express = require('express');
var app = express();
var router = require('./router')
var bodyparser = require('body-parser')

app.use(bodyparser.json({limit:"50mb"}))
app.use('/', router);
app.listen('3000');