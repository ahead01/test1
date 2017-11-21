// file must exist
var Pizza = require('../models/pizza-model');

// SEE https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications

// Sample data model: 1.00 = pizza1 small, 1.55 = pizza1 medium, 2.99 = pizza2 large
/*
var  NewPizza = new Pizza({
    name: "Pizza1",
    desc: "Description for Pizza1",
    price: {sm: 1.00, md: 1.55, lg: 1.99}
});
*/
function debug(err, res, req){
    console.log(req.body);
    console.log(err);
    res.render('error', {title: "Error", error: err, req: req});
};

// Handle pizza
exports.pizza_create_post = function(req, res) {
    var NewPizza = new Pizza(req.body);
    NewPizza.save(function(err) {
       if (err) {
           console.log("pizza_create_post : fail");
           debug(err, res, req);
       }
       console.log("pizza_create_post : success");
    });
};

// Handle pizza
exports.pizza_read_get_one = function(req, res) {
    var pizzaName = req.body.name;
    Pizza.find({ name: "pizzaName"}, function(err, pizza){
        if (err) {
            console.log("pizza_read_get_one : fail");
            debug(err, res, req);
        }
        console.log("pizza_read_get_one : success");
        res.send(pizza);
    });

};

// Handle pizza
exports.index = function(req, res) {
    Pizza.find({}, function(err, pizzas){
        if (err) {
            console.log("pizza_read_get_all : fail");
            debug(err, res, req);
        }
        console.log("pizza_read_get_all : success");
        res.render('menu', {title: "Menu", pizzas: pizzas});
    });
};