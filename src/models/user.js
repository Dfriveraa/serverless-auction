const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: false,

  },
});
module.exports = mongoose.model('User', userSchema);
