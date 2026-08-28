const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
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
    enum: ['Junior', 'Senior', 'College', 'Professional'],
    required: true
  },
  achievements: [{
    type: String
  }],
  members: [{
    name: String,
    role: String
  }],
  competitions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Competition'
  }],
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

module.exports = mongoose.model('Team', teamSchema);