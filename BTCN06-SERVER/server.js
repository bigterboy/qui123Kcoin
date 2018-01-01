var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');


//mongoose instance connection url connection
const MONGODB_URI = 'mongodb://duythao:123456@ds121726.mlab.com:21726/blockchain'
const host = 'mongodb://localhost:27017/blockchain';
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI , { useMongoClient: true });
app.set('superSecret', 'voduythaosecret');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(expressValidator());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

var route = require('./api/routes/userRoute');//importing route
route(app); //register the route







app.listen(port);

console.log('RESTful API server started on: ' + port);