var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors');

const errorHandler = require('./service/error_service');

var config = require('./config/config');
var db = require('./service/db_service');
// var nodemailer = require("nodemailer");
// var smtpTransport = require('nodemailer-smtp-transport');

var port = config.PORT || 3010;

app.use(bodyParser.urlencoded({
  extended: false
}));
app.set('superSecret', config.secret);
app.use(cors());
app.use(bodyParser.json());

// use JWT auth to secure the api
app.set('dbservice',db);

// api routes
app.use('/android/v1', require('./routes/v1-routes'));

// global error handler
app.use(errorHandler);

app.listen(port, function(req, res) {
  console.log('Server is running at port: ', port);
});
