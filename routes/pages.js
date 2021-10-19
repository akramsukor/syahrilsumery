const express = require('express');
const { homeCtrlFunction, bahasaCtrlFunction } = require('../controllers/pagesCtrlFile');

const router = express.Router();

router.get('/', homeCtrlFunction);
router.get('/my', bahasaCtrlFunction);

module.exports = router;