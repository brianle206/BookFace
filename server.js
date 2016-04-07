var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var multiPart = require('connect-multiparty');
var multiPartMiddleware = multiPart();

var app = express();
var authenticationController = require('./server/controllers/authentication-controller.js');
var profileController = require('./server/controllers/profile-controller.js');

mongoose.connect('mongodb://localhost:27017/BookFace');
app.use(bodyParser.json());

app.use(multiPartMiddleware);
app.use('/client', express.static(__dirname + '/client'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', function(req,res){
	res.sendfile('index.html');
})

//Authentication
app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login', authenticationController.login);


//Profile
app.post('/api/profile/editPhoto', multiPartMiddleware, profileController.updatePhoto);

app.listen('1337', function(){
	console.log("Listening on port 1337");
});