const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  parentName: {
    type: String,
    required: true
  },
  schoolName: {
    type: String
  },
  city: {
    type: String
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  areaOfInterest: {
    type: String,
    enum: ['Robotics Competition Training', 'AI Competition Preparation', 'STEM Competition Preparation', 'Coding Competition Preparation', 'Drone Competition Preparation', 'School Partnership'],
    required: true
  },
  message: {
    type: String
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'in-progress', 'completed'],
    default: 'new'
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

module.exports = mongoose.model('Contact', contactSchema);