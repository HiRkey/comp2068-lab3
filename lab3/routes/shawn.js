'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    var nameShawn = 'shawn';
    var message1 = "I like soccer";

    res.render('shawn', { person: nameShawn, p: message1 });
});

module.exports = router;
