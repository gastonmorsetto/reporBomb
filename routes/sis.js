var express = require('express');
var router = express.Router();
const sisController = require('../controllers/sisController');

/* GET home page. */
router.get('/', sisController.index);
router.post('/', sisController.guardar);

module.exports = router;

