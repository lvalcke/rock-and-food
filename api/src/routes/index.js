const dishesRoutes = require('./dishesRoutes');
const { Router } = require('express');

const router = Router();

router.use('/dishes', dishesRoutes);

module.exports = router;
