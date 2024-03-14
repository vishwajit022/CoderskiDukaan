const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    }
},{ timestamps: true });

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;