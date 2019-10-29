'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {


    var nameSally = 'sally';
    var message3 = "I like hockey";

    res.render('sally', { person: nameSally, p: message3 });
}); 


module.exports = router;
