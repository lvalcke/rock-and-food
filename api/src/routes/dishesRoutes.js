const { Router } = require('express');
const ctr = require('../controllers');

const router = Router();
router.post('/fill', ctr.fillDishes);

module.exports = router;
