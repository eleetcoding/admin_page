const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  title: { type: String, required: true },
  instructor: { type: String, required: true },
  date: { type: Number, required: true },
  url: { type: String, required: true },
  description: { type: String, required: false },
});

module.exports = mongoose.model('Session', sessionSchema);
