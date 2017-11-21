// file must exist
//var Pizza = require('../models/pizza-model');

// SEE https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

function debug(err, res, req){
    console.log(req.body);
    console.log(err);
    res.render('error', {title: "Error", error: err, req: req});
};


// Handle pizza
exports.index = function(req, res) {
    res.render('admin', {title: "Administration"});
};

exports.piza_create_get = function(req, res) {
    res.render('create-pizza', {title: "Add A New Pizza"});
};