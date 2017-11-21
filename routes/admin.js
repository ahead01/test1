
var express = require('express');
var router = express.Router();

/* Controllers */
var pizzaController = require('../controllers/pizza-cont');
var adminController = require('../controllers/admin-cont');

router.get('/', adminController.index);

/* GET users listing. */
router.post('/create/pizza', pizzaController.pizza_create_post);

router.get('/create/pizza', adminController.piza_create_get);


module.exports = router;