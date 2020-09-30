const { Router } = require('express');
const { User } = require('../models');
const jwt = require('jsonwebtoken')

const router = Router({ mergeParams: true });

router.post('/', async (req, res) => {
  let result = {};
  const { username, password } = req.body;
  console.log('BBBANNN', process.env.JWT_EXPIRE_IN)
  result = await User.findOne({ where: { username, password } });
  if (result) {
    const token = jwt.sign({username: username, id: result.id },
      'aaaa',
      { expiresIn: process.env.JWT_EXPIRE_IN || '24h' }
    );
    return res.json({ token });
  }
  return res.status(500).json({ status: 'fail' })
});

module.exports = router;
