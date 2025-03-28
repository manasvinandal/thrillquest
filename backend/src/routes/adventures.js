const express = require('express');
const router = express.Router();
const Adventure = require('../models/Adventure');

// Get all adventures
router.get('/', async (req, res) => {
  try {
    const adventures = await Adventure.find();
    res.json(adventures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get adventure by ID
router.get('/:id', async (req, res) => {
  try {
    const adventure = await Adventure.findById(req.params.id);
    if (!adventure) {
      return res.status(404).json({ message: 'Adventure not found' });
    }
    res.json(adventure);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get adventures by category
router.get('/category/:category', async (req, res) => {
  try {
    const adventures = await Adventure.find({ category: req.params.category });
    res.json(adventures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new adventure
router.post('/', async (req, res) => {
  const adventure = new Adventure(req.body);
  try {
    const newAdventure = await adventure.save();
    res.status(201).json(newAdventure);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update adventure
router.put('/:id', async (req, res) => {
  try {
    const adventure = await Adventure.findById(req.params.id);
    if (!adventure) {
      return res.status(404).json({ message: 'Adventure not found' });
    }
    Object.assign(adventure, req.body);
    const updatedAdventure = await adventure.save();
    res.json(updatedAdventure);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete adventure
router.delete('/:id', async (req, res) => {
  try {
    const adventure = await Adventure.findById(req.params.id);
    if (!adventure) {
      return res.status(404).json({ message: 'Adventure not found' });
    }
    await adventure.remove();
    res.json({ message: 'Adventure deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 