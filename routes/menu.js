var express = require('express');
var router = express.Router();

/* Controllers */
var pizzaController = require('../controllers/pizza-cont');


/* GET request for list of all tasks. */
router.get('/', pizzaController.index );


module.exports = router;
