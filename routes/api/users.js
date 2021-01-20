const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedin = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);

router.get('/check-token', ensureLoggedin, usersCtrl.checkToken);

module.exports = router;