var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({'message':'index page'});
});

router.get('/demo', function(req, res, next) {
    res.json({'message':'demo page'});
});

module.exports = router;