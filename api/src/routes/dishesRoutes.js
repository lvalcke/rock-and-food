const { Router } = require('express');
const ctr = require('../controllers');

const router = Router();
router.post('/fill', ctr.fillDishes);
router.get('/all', ctr.getAllDishes);

module.exports = router;
