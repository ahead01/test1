// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var pizzaSchema = new Schema({
    name: {type: String, required: true, unique: true},
    desc: String,
    price: { sm: Number, md: Number, lg: Number}
},{collection: 'pizzas2'});

// we need to create a model using it
var Pizza = mongoose.model('Pizza', pizzaSchema);

// make this available to our users in our Node applications
module.exports = Pizza;