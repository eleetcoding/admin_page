const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  title: { type: String, required: true },
  instructor: { type: String, required: true },
  date: { type: Number, require: true },
  description: String,
});

module.exports = mongoose.model('Session', sessionSchema);
