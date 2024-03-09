const express = require("express");
const router = express.Router();

const User = require("../models/User");
const { addUser, getUser } = require("../controller/user.controller");

// Login route
router.post("/login", getUser);

router.post('/signin', addUser )

module.exports = router;
