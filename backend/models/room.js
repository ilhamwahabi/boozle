var mongoose = require('mongoose');

var roomSchema = new mongoose.Schema({
  team: {
    type: String,
  },
  name: {
    type: String,
  },
  time: {
    type: String,
  },
  location: {
    type: String,
  },
  date: {
    type: String,
  },
  day: {
    type: String,
  },
  img: {
    type: String,
  },
  ownApproval: {
    type: Boolean,
  },
  oppApproval: {
    type: Boolean,
  },
  chat: {
    type: [],
  },
});
  
module.exports = mongoose.model('Room', roomSchema);
