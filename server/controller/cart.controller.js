// controllers/cartController.js
const CartItem = require("../models/cartItem");

// Add item to cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, userId } = req.body;
    const cartItem = new CartItem({ productId, userId });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: "Unable to add item to cart" });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { cartItemId } = req.params;
    await CartItem.findByIdAndRemove(cartItemId);
    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: "Unable to remove item from cart" });
  }
};
