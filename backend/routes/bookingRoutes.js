const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const Booking = require('../models/bookingModel');
const Adventure = require('../models/adventureModel');
const User = require('../models/userModel');

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const { adventureId, date, participants, specialRequirements } = req.body;

    // Get adventure details
    const adventure = await Adventure.findById(adventureId);
    if (!adventure) {
      return res.status(404).json({ message: 'Adventure not found' });
    }

    // Calculate total price
    const totalPrice = adventure.price * participants;

    // Create booking
    const booking = await Booking.create({
      user: req.user._id,
      adventure: adventureId,
      date,
      participants,
      totalPrice,
      specialRequirements
    });

    // Add booking to user's bookings
    await User.findByIdAndUpdate(req.user._id, {
      $push: { bookings: booking._id }
    });

    res.status(201).json({
      message: 'Booking created successfully',
      booking
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while creating booking' });
  }
});

// @desc    Get user's bookings
// @route   GET /api/bookings
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate('adventure')
      .sort('-createdAt');
    res.json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching bookings' });
  }
});

// @desc    Get booking by ID
// @route   GET /api/bookings/:id
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('adventure')
      .populate('user', 'name email phone');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Check if the booking belongs to the logged-in user
    if (booking.user._id.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    res.json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching booking' });
  }
});

// @desc    Cancel booking
// @route   PUT /api/bookings/:id/cancel
// @access  Private
router.put('/:id/cancel', protect, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Check if the booking belongs to the logged-in user
    if (booking.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    booking.status = 'cancelled';
    await booking.save();

    res.json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while cancelling booking' });
  }
});

module.exports = router; 