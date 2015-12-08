var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['new', 'inProgress', 'complete'], default: 'new' },
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
