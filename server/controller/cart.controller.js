const Cart = require("../models/cart.model")

exports.addCart = async (req, res)=>{
    const { userId, productId } = req.body;
    try {
        const exist =await Cart.findOne({productId});

        if (exist) {
            return res.status(400).json({ message: "Product already exists" });
          }

        const newCart = new Cart({
            userId,
            productId
        });

        await newCart.save();
        return res.status(200).json(newCart);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}
exports.getCart = async (req, res)=>{
    const { userId } = req.body;
    try {
        const cartItem =await Cart.findOne({userId});
        return res.status(200).json(cartItem);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}