const express = require("express");
const router = express.Router();

const { signup, login, userId } = require("../controller/user.controller");

// Login route
router.post("/login", login);

router.post("/signin", signup);
router.post("/user", userId);

module.exports = router;
