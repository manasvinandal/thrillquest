const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const Adventure = require('../models/adventureModel');

// @desc    Get all adventures
// @route   GET /api/adventures
// @access  Public
router.get('/', async (req, res) => {
  try {
    const adventures = await Adventure.find({});
    res.json(adventures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching adventures' });
  }
});

// @desc    Get adventure by ID
// @route   GET /api/adventures/:id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const adventure = await Adventure.findById(req.params.id);
    if (adventure) {
      res.json(adventure);
    } else {
      res.status(404).json({ message: 'Adventure not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching adventure' });
  }
});

// @desc    Get adventures by category
// @route   GET /api/adventures/category/:category
// @access  Public
router.get('/category/:category', async (req, res) => {
  try {
    const adventures = await Adventure.find({ category: req.params.category });
    res.json(adventures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching adventures by category' });
  }
});

// @desc    Create a review
// @route   POST /api/adventures/:id/reviews
// @access  Private
router.post('/:id/reviews', protect, async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const adventure = await Adventure.findById(req.params.id);

    if (adventure) {
      const alreadyReviewed = adventure.reviews.find(
        (review) => review.user.toString() === req.user._id.toString()
      );

      if (alreadyReviewed) {
        return res.status(400).json({ message: 'Adventure already reviewed' });
      }

      const review = {
        user: req.user._id,
        rating: Number(rating),
        comment,
      };

      adventure.reviews.push(review);
      adventure.rating = adventure.reviews.reduce((acc, item) => item.rating + acc, 0) / adventure.reviews.length;

      await adventure.save();
      res.status(201).json({ message: 'Review added' });
    } else {
      res.status(404).json({ message: 'Adventure not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while adding review' });
  }
});

module.exports = router; 