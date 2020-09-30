const { Router } = require('express');
const { checkToken } = require('./authmiddleware');
const router = Router();

router.use('/login', require('./login'));
router.use('/users', require('./users'));

module.exports = router;
