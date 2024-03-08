// models/Product.js

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  image: String,
  category: String,
  rating: Object,
  description: String,
  // Add more fields as needed
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
