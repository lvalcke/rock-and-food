const mongoose = require('mongoose');

const DishSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    url: String,
    public_id: String
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    default: 0
  },
  stock: {
    type: Number
  },
  comments: {
    type: Array,
    default: []
  }
}, {
  versionKey: false
});

module.exports = mongoose.model('Dish', DishSchema);
