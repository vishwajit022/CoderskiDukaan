// routes/cartRoutes.js
const express = require("express");
const router = express.Router();
const cartController = require("../controller/cart.controller");

router.post("/", cartController.addToCart);

router.delete("/:cartItemId/", cartController.removeFromCart);

module.exports = router;
