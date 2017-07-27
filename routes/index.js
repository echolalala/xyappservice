var express = require('express');
var router = express.Router();





/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express',body:'我是首页内容' });
});

module.exports = router;



