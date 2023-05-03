const axios = require('axios');
const Dish = require('../models/Dish');

module.exports = async (req, res) => {
  try {
    const dishes = await axios('https://el-bodegon-api-wine.vercel.app/foods');
    const cleanDishes = dishes.data.map((d) => {
      const { _id, ...rest } = d;
      return { ...rest };
    });
    const fillDishes = await Dish.collection.insertMany(cleanDishes);
    res.status(201).json({
      msg: 'Under development',
      ...fillDishes
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
