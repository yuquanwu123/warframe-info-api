var express = require('express');
var router = express.Router();
var wfaLib = require('../utils/wfaLibs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.all('/test', function(req, res, next) {
  wfaLib.initLibsCache();
  res.send(wfaLib.libsArr);
});

module.exports = router;