const express = require("express");
const router = express.Router();

const User = require("../models/User");
const { addUser, getUser, userId } = require("../controller/user.controller");

// Login route
router.post("/login", getUser);

router.post('/signin', addUser )
router.post('/user', userId )


module.exports = router;
