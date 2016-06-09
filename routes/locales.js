var express = require('express');
var router = express.Router();

/* GET page. */
router.get('/*', function(req, res, next) {
  res.send(require('../locales'+req.url));
});


module.exports = router;
