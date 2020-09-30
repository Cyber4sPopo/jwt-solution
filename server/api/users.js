const { Router } = require('express');
const { User } = require('../models');

const router = Router({ mergeParams: true });

router.post('/', async (req, res) => {
  let result = {};
  const user = req.body;
  try {
    console.log('Users', user)
    result = await User.create(user);
  } catch (e) {
    console.log('result', e)
    return res.status(500).json({
      status: 'ERROR',
      msg: e,
    });
  }
  return res.json({ status: 'ok' });
});

module.exports = router;
