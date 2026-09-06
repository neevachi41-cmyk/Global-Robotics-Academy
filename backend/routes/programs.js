const express = require('express');
const router = express.Router();
const Program = require('../models/Program');

// Get all programs
router.get('/', async (req, res) => {
  try {
    const programs = await Program.find({ isActive: true }).sort({ order: 1 });
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching programs', error: error.message });
  }
});

// Get single program
router.get('/:id', async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }
    res.json(program);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching program', error: error.message });
  }
});

// Create program (admin only)
router.post('/', async (req, res) => {
  try {
    const program = new Program(req.body);
    await program.save();
    res.status(201).json(program);
  } catch (error) {
    res.status(400).json({ message: 'Error creating program', error: error.message });
  }
});

// Update program (admin only)
router.put('/:id', async (req, res) => {
  try {
    const program = await Program.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }
    res.json(program);
  } catch (error) {
    res.status(400).json({ message: 'Error updating program', error: error.message });
  }
});

// Delete program (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const program = await Program.findByIdAndUpdate(
      req.params.id,
      { isActive: false, updatedAt: Date.now() },
      { new: true }
    );
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }
    res.json({ message: 'Program deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting program', error: error.message });
  }
});

module.exports = router;