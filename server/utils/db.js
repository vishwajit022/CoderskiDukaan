// ./utils/db.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../models/User"); // Import your User model here

const connect = async () => {
  try {
    const URI = process.env.MONGO_URI;

    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to the DB");

    // Load data here (example)
    await loadInitialData();
  } catch (error) {
    console.error("Error connecting to the DB:", error.message);
  }
};

// Function to load initial data into the database
const loadInitialData = async () => {
  try {
    // Check if any user exists
    const existingUsers = await User.find();

    if (existingUsers.length === 0) {
      // Create a sample user for testing (you should have a registration endpoint for creating users)
      const hashedPassword = await bcrypt.hash("password123", 10); // Hashed password

      const user = new User({
        username: "testuser",
        password: hashedPassword,
      });

      await user.save();
      console.log("Sample user created successfully");
    }
  } catch (error) {
    console.error("Error loading initial data:", error.message);
  }
};

module.exports = { connect };
