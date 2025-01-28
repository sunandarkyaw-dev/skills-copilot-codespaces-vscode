// Create web server 
// Get comments from database
// Return comments to client

var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.get('/', function(req, res, next) {
  // Get comments
  db.Comment.find({}, function(err, comments) {
    if (err) {
      res.send(err);
    } else {
      res.json(comments);
    }
  });
});

module.exports = router;