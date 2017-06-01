var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.productos.findAll().then(productos => {
  	res.json({productos: productos});
  });
});

module.exports = router;
