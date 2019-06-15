var mongoose = require('mongoose');
let validator = require('validator');

var userStockSchema = new mongoose.Schema({
  symbol: {
    type: String,
    unique: true,
    uppercase: true
  },
  name: {
    type: String,
  },
  volume: {
    type: Number,
  },
  boughtPrice: {
    type: Number,
  },
  currentPrice: {
    type: Number,
  }
});

var userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value)
    }
  },
  password: {
    type: String,
  },
  stocks: {
    type: [userStockSchema],
  },
});
  
module.exports = mongoose.model('User', userSchema);
