'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {


    var firstName = 'First Name: ';
    var name;
    var message;
    if (req.query.name)
        name = req.query.name;             //req.query.name -> ?name=shawn  / req.params.name -> /shawn

        

    res.render('index', {
        title: 'List of Family Members: /Shawn/Sam/Sally/Rick/Hailey',
        person: firstName + name + " " + message

    }); 


   

});

module.exports = router;
