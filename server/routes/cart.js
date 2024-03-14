const express = require("express");
const router = express.Router();
const { addCart, getCart } = require("../controller/cart.controller")


// Login route
router.post("/addcart", addCart );
router.post("/getcart", getCart);

module.exports = router;
