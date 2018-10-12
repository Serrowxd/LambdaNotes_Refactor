const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

// pre-save

noteSchema.pre('save', function(next) {
  console.log('pre save hook');

  next();
});

module.exports = mongoose.model('Note', noteSchema);
