const express = require('express');
const router = express.Router();
const brandsCtrl = require('../../controllers/api/brands');

// GET /api/items
router.get('/', brandsCtrl.index);
// // GET /api/items/:id

module.exports = router;