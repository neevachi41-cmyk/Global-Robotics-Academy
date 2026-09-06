const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');

// Get all gallery items
router.get('/', async (req, res) => {
  try {
    const gallery = await Gallery.find({ isActive: true }).sort({ order: 1 });
    res.json(gallery);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching gallery items', error: error.message });
  }
});

// Get single gallery item
router.get('/:id', async (req, res) => {
  try {
    const item = await Gallery.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching gallery item', error: error.message });
  }
});

// Create gallery item (admin only)
router.post('/', async (req, res) => {
  try {
    const item = new Gallery(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: 'Error creating gallery item', error: error.message });
  }
});

// Update gallery item (admin only)
router.put('/:id', async (req, res) => {
  try {
    const item = await Gallery.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!item) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(400).json({ message: 'Error updating gallery item', error: error.message });
  }
});

// Delete gallery item (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const item = await Gallery.findByIdAndUpdate(
      req.params.id,
      { isActive: false, updatedAt: Date.now() },
      { new: true }
    );
    if (!item) {
      return res.status(404).json({ message: 'Gallery item not found' });
    }
    res.json({ message: 'Gallery item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting gallery item', error: error.message });
  }
});

module.exports = router;