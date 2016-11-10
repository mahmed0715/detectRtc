
var fs = require('fs'),
    express = require('express'),
    http = require('http');

console.log(process.argv)



var app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + "/app"));

http.createServer(app).listen(process.argv[2] || 8080);//we stop this//comment it before upload
//https.createServer({key: privateKey, cert: certificate}, app).listen(8860);



app.get('*', function (req, res, next) {
  process_headers(req.headers);
  next();
});


app.get('/img/noimage.gif', function (req, res) {
  //yes the browser doesnt support javascript//
  //either browser javascript is disabled or browser is so obsolete
  //sending the requested file
  //got some information about the request
  //so grab it MAN!!!!!
  console.log("users browser javascript disabled!!");
  res.sendFile(__dirname + '/img/noimage.gif');
});


app.get('/process_features', function (req, res) {
  //we got the obj
  //
  console.dir(req.query);
  res.send(process_features(req.query));
});

var process_features = function (resultObj) {
   var data = (resultObj.hasWebcam);
  //process data here
  return true;
}

function process_headers(headers){
  //we got headers object here //stores all the http headers
  //we can use loooping on the obj to get all values like for (var i in headers) headers[i] //as "for" is the fastest looping
  //process headers here...
  console.log("We got headers:",headers)
}