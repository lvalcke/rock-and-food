const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: Boolean,
    default: false
  },
  is_active: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('UserSchema', UserSchema);
