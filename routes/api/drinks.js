const express = require('express');
const router = express.Router();
const drinksCtrl = require('../../controllers/api/drinks');

// GET /api/items
router.get('/', drinksCtrl.index);
// // GET /api/items/:id
// router.get('/:id', drinksCtrl.show);

module.exports = router;