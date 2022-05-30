const express = require('express');
const { homeCtrlFunction, eventCtrlFunction } = require('../controllers/pagesCtrlFile');

const router = express.Router();

router.get('/', homeCtrlFunction);
router.get('/event', eventCtrlFunction);

module.exports = router;