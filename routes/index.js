var express = require('express');
var router = express.Router();
var request = require('request-json');


/* GET home page. */
router.get('/', function(req, res) {

  var client = request.createClient('http://localhost:8080');
  client.get('api/', function(e, r, body) {
    data = [];

    var rncs = body['rncs'];

    for(var i = 0; i < rncs.length; i++) {
      var node = {};
      var rnc = rncs[i];
      node['text'] = rnc['name'];

      var btss = rnc['btss'];
      var children = [];
      for(var j = 0; j < btss.length; j++) {
        var child = {};
        child['text'] = btss[j]['name'];
        children.push(child);
      }

      node['children'] = children;
      data.push(node);
    }
    res.render('index', { title: 'Express', data: JSON.stringify(data)});

  });
});

module.exports = router;
