const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controller/stuffCtrl');
const auth = require('../middleware/auth');

router.post('/', auth, stuffCtrl.createThing);
router.get('/', auth, stuffCtrl.findAll);
router.get('/:id', auth, stuffCtrl.findById);
router.put('/:id', auth,  stuffCtrl.updateById);
router.delete('/:id', auth,  stuffCtrl.removeById);

module.exports = router;