const mongoose = require('mongoose');

const competitionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Robotics', 'AI', 'STEM', 'Coding', 'Drone', 'Innovation'],
    required: true
  },
  eligibility: {
    type: String
  },
  ageGroups: [{
    type: String
  }],
  registrationRequirements: {
    type: String
  },
  competitionDetails: {
    type: String
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Competition', competitionSchema);