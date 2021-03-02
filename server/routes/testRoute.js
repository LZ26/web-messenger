const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Testing this route: 1, 2, 3...');
});

module.exports = router;
