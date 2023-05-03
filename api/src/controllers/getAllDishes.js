const Dish = require('../models/Dish');

module.exports = async (req, res) => {
  try {
    const allDishes = await Dish.find();
    res.status(200).json(allDishes);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
