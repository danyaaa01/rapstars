var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Gunna */
router.get('/gunna', function(req, res, next) {
  res.send("<h1>Страница Gunna</h1>")
});

/* Страница Drake */
router.get('/drake', function(req, res, next) {
  res.send("<h1>Страница Drake</h1>")
});

/* Страница Коржика */
router.get('/young_thug', function(req, res, next) {
  res.send("<h1>Страница Young Thug</h1>")
});

module.exports = router;
