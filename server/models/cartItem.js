// models/CartItem.js
const mongoose = require("mongoose");

const cartItemSchema = mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = CartItem;
