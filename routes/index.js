var express = require('express');
var router = express.Router();
// var todosCtrl = require('../controllers/todos')

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/todos');
});



module.exports = router;
