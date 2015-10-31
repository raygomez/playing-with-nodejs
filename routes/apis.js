var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  var data  = {
    "rncs" : [
      {
        "rnc_id" : 1,
        "name" : "RNC1",
        "btss" : [
          {
            "bts_id" : 1,
            "name" : "BTS1"
          },
          {
            "bts_id" : 2,
            "name" : "BTS2"
          },
        ]
      },
      {
        "rnc_id" : 2,
        "name" : "RNC2",
        "btss" : [
          {
            "bts_id" : 1,
            "name" : "BTS1"
          },
          {
            "bts_id" : 2,
            "name" : "BTS2"
          },
        ]

      }
    ]

  };
  res.json(data);
});

module.exports = router;
