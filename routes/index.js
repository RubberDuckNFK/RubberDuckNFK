var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/front', function(req, res) {
    res.render('front', { title: 'Express' });
});

module.exports = router;
