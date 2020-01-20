const express = require('express');
const router = express.Router();
const userCtrl = require('../controller/userCtrl');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/allusers', userCtrl.allUser);


module.exports = router;