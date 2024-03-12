const express = require("express");
const router = express.Router();

const User = require("../models/User");
const { signup, login, userId } = require("../controller/user.controller");

// Login route
router.post("/login", login);

router.post("/register", signup);
router.post("/user", userId);

module.exports = router;
