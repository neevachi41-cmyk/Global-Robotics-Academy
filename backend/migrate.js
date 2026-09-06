const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const MIGRATIONS_DIR = path.join(__dirname, 'migrations');

async function runMigrations() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/robotics-academy');
    console.log('Connected to MongoDB');

    // Get all migration files
    const migrationFiles = fs.readdirSync(MIGRATIONS_DIR)
      .filter(file => file.endsWith('.js'))
      .sort();

    console.log(`Found ${migrationFiles.length} migration files`);

    for (const file of migrationFiles) {
      const migrationPath = path.join(MIGRATIONS_DIR, file);
      const migration = require(migrationPath);
      
      console.log(`Running migration: ${file}`);
      await migration.up();
      console.log(`✓ Migration ${file} completed`);
    }

    console.log('All migrations completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

async function rollbackMigrations() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/robotics-academy');
    console.log('Connected to MongoDB');

    // Get all migration files
    const migrationFiles = fs.readdirSync(MIGRATIONS_DIR)
      .filter(file => file.endsWith('.js'))
      .sort()
      .reverse();

    console.log(`Found ${migrationFiles.length} migration files for rollback`);

    for (const file of migrationFiles) {
      const migrationPath = path.join(MIGRATIONS_DIR, file);
      const migration = require(migrationPath);
      
      console.log(`Rolling back migration: ${file}`);
      await migration.down();
      console.log(`✓ Rollback ${file} completed`);
    }

    console.log('All rollbacks completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Rollback failed:', error);
    process.exit(1);
  }
}

// Command line interface
const command = process.argv[2];

if (command === 'rollback') {
  rollbackMigrations();
} else {
  runMigrations();
}