const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

// Get all teams
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find({ isActive: true }).sort({ order: 1 }).populate('competitions');
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching teams', error: error.message });
  }
});

// Get single team
router.get('/:id', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate('competitions');
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }
    res.json(team);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching team', error: error.message });
  }
});

// Create team (admin only)
router.post('/', async (req, res) => {
  try {
    const team = new Team(req.body);
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    res.status(400).json({ message: 'Error creating team', error: error.message });
  }
});

// Update team (admin only)
router.put('/:id', async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }
    res.json(team);
  } catch (error) {
    res.status(400).json({ message: 'Error updating team', error: error.message });
  }
});

// Delete team (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(
      req.params.id,
      { isActive: false, updatedAt: Date.now() },
      { new: true }
    );
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }
    res.json({ message: 'Team deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting team', error: error.message });
  }
});

module.exports = router;