const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
var express = require('express');
var app = express();

const config = require('../config/config');
const userService = require('../schema/user.model');

var db = app.get('dbservice');

module.exports.isAuthorized = function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.headers['Authorization'] || req.headers['authorization'];

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, app.get('superSecret'), function(err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate.' });
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      return res.status(403).send({
          success: false,
          message: 'You have not Authorized.'
      });

    }
}
