'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    var nameSam = 'sam';
    var message2 = "I like golf";

    res.render('sam', { person: nameSam, p: message2 });
}); 


module.exports = router;
