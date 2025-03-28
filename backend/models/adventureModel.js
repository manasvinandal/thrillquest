const mongoose = require('mongoose');

const adventureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Adventure name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Adventure description is required']
  },
  category: {
    type: String,
    required: [true, 'Adventure category is required'],
    enum: ['Air', 'Water', 'Land']
  },
  duration: {
    type: String,
    required: [true, 'Adventure duration is required']
  },
  price: {
    type: Number,
    required: [true, 'Adventure price is required']
  },
  location: {
    type: String,
    required: [true, 'Adventure location is required']
  },
  imageUrl: {
    type: String,
    required: [true, 'Adventure image is required']
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Moderate', 'Difficult', 'Expert'],
    required: [true, 'Adventure difficulty level is required']
  },
  requirements: [{
    type: String
  }],
  highlights: [{
    type: String
  }],
  included: [{
    type: String
  }],
  maxGroupSize: {
    type: Number,
    required: [true, 'Maximum group size is required']
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: Number,
    comment: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

const Adventure = mongoose.model('Adventure', adventureSchema);

module.exports = Adventure; 