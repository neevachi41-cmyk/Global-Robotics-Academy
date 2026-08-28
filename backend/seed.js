const mongoose = require('mongoose');
const Competition = require('./models/Competition');
const Program = require('./models/Program');
const Team = require('./models/Team');
const Gallery = require('./models/Gallery');
require('dotenv').config();

// Sample data
const competitions = [
  {
    name: 'Browser Test Competition',
    description: 'Browser test',
    category: 'Robotics',
    eligibility: 'Age 10-18',
    order: 1
  },
  {
    name: 'School Robotics Championships',
    description: 'Competition preparation pathway for students and teams.',
    category: 'Robotics',
    eligibility: 'Age 12-18',
    order: 2
  },
  {
    name: 'IRC League',
    description: 'Competition preparation pathway for students and teams.',
    category: 'Robotics',
    eligibility: 'Age 14-20',
    order: 3
  },
  {
    name: 'Smart India Hackathon – Hardware Edition',
    description: 'Competition preparation pathway for students and teams.',
    category: 'Robotics',
    eligibility: 'College students',
    order: 4
  },
  {
    name: 'ABU Robocon India',
    description: 'Competition preparation pathway for students and teams.',
    category: 'Robotics',
    eligibility: 'Engineering students',
    order: 5
  },
  {
    name: 'e-Yantra Robotics Competition',
    description: 'Competition preparation pathway for students and teams.',
    category: 'Robotics',
    eligibility: 'College students',
    order: 6
  },
  {
    name: 'IIT Techfest Robotics Competition',
    description: 'Competition preparation pathway for students and teams.',
    category: 'Robotics',
    eligibility: 'College students',
    order: 7
  },
  {
    name: 'Anvesh Bharat',
    description: 'Competition preparation pathway for students and teams.',
    category: 'Robotics',
    eligibility: 'Age 15-22',
    order: 8
  }
];

const programs = [
  {
    name: 'Drone Competition Preparation',
    description: 'Structured preparation from foundations to competition readiness.',
    category: 'Drone Competition',
    duration: '12 weeks',
    order: 1
  },
  {
    name: 'Innovation Challenge Preparation',
    description: 'Structured preparation from foundations to competition readiness.',
    category: 'Innovation Challenge',
    duration: '10 weeks',
    order: 2
  },
  {
    name: 'Coding Competition Preparation',
    description: 'Structured preparation from foundations to competition readiness.',
    category: 'Coding Competition',
    duration: '8 weeks',
    order: 3
  },
  {
    name: 'STEM Competition Preparation',
    description: 'Structured preparation from foundations to competition readiness.',
    category: 'STEM Competition',
    duration: '12 weeks',
    order: 4
  },
  {
    name: 'AI Competition Preparation',
    description: 'Structured preparation from foundations to competition readiness.',
    category: 'AI Competition',
    duration: '16 weeks',
    order: 5
  },
  {
    name: 'Robotics Competition Preparation',
    description: 'Structured preparation from foundations to competition readiness.',
    category: 'Robotics Competition',
    duration: '20 weeks',
    order: 6
  }
];

const teams = [
  {
    name: 'Team VhyuAstra Jr.',
    description: 'Student-led robotics team within the Global Robotics Academy ecosystem.',
    category: 'Junior',
    achievements: ['Regional Winner 2023'],
    members: [
      { name: 'Student 1', role: 'Team Lead' },
      { name: 'Student 2', role: 'Programmer' }
    ],
    order: 1
  },
  {
    name: 'Team Fortrans',
    description: 'Student-led robotics team within the Global Robotics Academy ecosystem.',
    category: 'Senior',
    achievements: ['National Qualifier 2023'],
    members: [
      { name: 'Student 3', role: 'Team Lead' },
      { name: 'Student 4', role: 'Engineer' }
    ],
    order: 2
  },
  {
    name: 'Team Kalki Robotics',
    description: 'Student-led robotics team within the Global Robotics Academy ecosystem.',
    category: 'College',
    achievements: ['Innovation Award 2023'],
    members: [
      { name: 'Student 5', role: 'Team Lead' },
      { name: 'Student 6', role: 'Designer' }
    ],
    order: 3
  },
  {
    name: 'VhyuAstra Robotics',
    description: 'Student-led robotics team within the Global Robotics Academy ecosystem.',
    category: 'Senior',
    achievements: ['International Participant 2023'],
    members: [
      { name: 'Student 7', role: 'Team Lead' },
      { name: 'Student 8', role: 'Strategist' }
    ],
    order: 4
  }
];

const galleryItems = [
  {
    title: 'Robotics Arena',
    description: 'Admin-managed gallery content will appear here.',
    category: 'Training',
    type: 'image',
    order: 1
  },
  {
    title: 'Team Work',
    description: 'Admin-managed gallery content will appear here.',
    category: 'Team Activities',
    type: 'image',
    order: 2
  },
  {
    title: 'Test / Optimize',
    description: 'Admin-managed gallery content will appear here.',
    category: 'Robot Testing',
    type: 'image',
    order: 3
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/robotics-academy');
    console.log('Connected to MongoDB');

    // Clear existing data
    await Competition.deleteMany({});
    await Program.deleteMany({});
    await Team.deleteMany({});
    await Gallery.deleteMany({});
    console.log('Cleared existing data');

    // Insert sample data
    await Competition.insertMany(competitions);
    console.log('Inserted competitions');

    await Program.insertMany(programs);
    console.log('Inserted programs');

    await Team.insertMany(teams);
    console.log('Inserted teams');

    await Gallery.insertMany(galleryItems);
    console.log('Inserted gallery items');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();