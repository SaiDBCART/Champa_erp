var http = require('http');
var bodyParser = require('body-parser')
var cors = require('cors')
const express = require('express');  
const app = require('express')(); 
var routes=require('./routes/approutes');
app.use(bodyParser.urlencoded({ extended: true })); 
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('../password encryption'))

app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

routes(app);
var server = app.listen(4000, function () {  
 
    var host = server.address().address
      var port = server.address().port  
     console.log("Example app listening at http://%s:%s", host, port)  
    })  