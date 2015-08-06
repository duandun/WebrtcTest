var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fun', function(req, res, next) {
	res.render('fun');
});

router.get('/qr', function(req, res, next) {
	res.render('jsqrcode');
});

router.get('/gen', function(req, res, next) {
	res.render('generate');
});

router.get('/uc', function(req, res, next) {
	res.render('uc');
});

module.exports = router;
