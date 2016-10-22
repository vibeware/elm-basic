var express = require('express');
var router = express.Router();

/* GET Index.html where ELM lives. */
router.get('/', function(req, res, next) {
  res.render('index')
});

module.exports = router;
