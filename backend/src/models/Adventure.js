const mongoose = require('mongoose');

const adventureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['air', 'water', 'ground']
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  locations: [{
    type: String,
    required: true
  }],
  requirements: [{
    type: String,
    required: true
  }],
  description: {
    type: String,
    required: true
  },
  highlights: [{
    type: String,
    required: true
  }],
  maxParticipants: {
    type: Number,
    default: 15
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Adventure', adventureSchema); 