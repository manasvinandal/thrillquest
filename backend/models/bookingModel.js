const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  adventure: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Adventure',
    required: true
  },
  date: {
    type: Date,
    required: [true, 'Booking date is required']
  },
  participants: {
    type: Number,
    required: [true, 'Number of participants is required'],
    min: 1
  },
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  specialRequirements: {
    type: String
  }
}, {
  timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking; 