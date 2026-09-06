const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Training', 'Team Activities', 'Robot Testing', 'Competition', 'Other'],
    required: true
  },
  imageUrl: {
    type: String
  },
  videoUrl: {
    type: String
  },
  type: {
    type: String,
    enum: ['image', 'video'],
    required: true
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

module.exports = mongoose.model('Gallery', gallerySchema);