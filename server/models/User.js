// ./models/User.js

const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const userSchema = mongoose.Schema({
  username: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true
  },
  password: {
      type: String,
      required: true
  },
  id: {
    type: String,
    default: uuidv4()
  }
},{ timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
