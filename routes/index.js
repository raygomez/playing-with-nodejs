var express = require('express');
var router = express.Router();
var request = require('request-json');


/* GET home page. */
router.get('/', function(req, res, next) {
  var client = request.createClient('http://localhost:8080');
  client.get('api/', function(e, r, body) {
    res.render('index', { title: 'Express', data: JSON.stringify(body)});

  });
});

module.exports = router;
