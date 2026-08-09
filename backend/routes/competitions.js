const express = require('express');
const router = express.Router();
const Competition = require('../models/Competition');

// Get all competitions
router.get('/', async (req, res) => {
  try {
    const competitions = await Competition.find({ isActive: true }).sort({ order: 1 });
    res.json(competitions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching competitions', error: error.message });
  }
});

// Get single competition
router.get('/:id', async (req, res) => {
  try {
    const competition = await Competition.findById(req.params.id);
    if (!competition) {
      return res.status(404).json({ message: 'Competition not found' });
    }
    res.json(competition);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching competition', error: error.message });
  }
});

// Create competition (admin only)
router.post('/', async (req, res) => {
  try {
    const competition = new Competition(req.body);
    await competition.save();
    res.status(201).json(competition);
  } catch (error) {
    res.status(400).json({ message: 'Error creating competition', error: error.message });
  }
});

// Update competition (admin only)
router.put('/:id', async (req, res) => {
  try {
    const competition = await Competition.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!competition) {
      return res.status(404).json({ message: 'Competition not found' });
    }
    res.json(competition);
  } catch (error) {
    res.status(400).json({ message: 'Error updating competition', error: error.message });
  }
});

// Delete competition (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const competition = await Competition.findByIdAndUpdate(
      req.params.id,
      { isActive: false, updatedAt: Date.now() },
      { new: true }
    );
    if (!competition) {
      return res.status(404).json({ message: 'Competition not found' });
    }
    res.json({ message: 'Competition deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting competition', error: error.message });
  }
});

module.exports = router;