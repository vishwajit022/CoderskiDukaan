// ./utils/db.js

const mongoose = require("mongoose");
const Product = require("../models/Product"); // Import your Product model here

const connect = async () => {
  try {
    const URI = process.env.MONGO_URI;

    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to the DB");

    // Load data here (example)
    await loadInitialData();
  } catch (error) {
    console.error("Error connecting to the DB:", error.message);
  }
};

// Function to load initial data into the database
const loadInitialData = async () => {
  try {
    const existingProducts = await Product.find();
    console.log(existingProducts.length);
    if (existingProducts.length === 0) {
      const products = [
        {
          title: "JS Developer tshirt",
          price: 499,
          description:
            "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
          category: "Coder's clothing",
          image: "https://m.media-amazon.com/images/I/41f2F98KiJL._SS135_.jpg",
          rating: { rate: 3.6, count: 145 },
        },
        {
          title: "CSS Developer",
          price: 499,
          description:
            "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
          category: "Coder's clothing",
          image: "https://m.media-amazon.com/images/I/51DJqmqStGL._SX679_.jpg",
          rating: { rate: 4.6, count: 145 },
        },
        {
          title: "Cracking the Coding Interview ",
          price: 599,
          description:
            "Unleash the Ideal Candidate within you with our Top selling book in our coding community",
          category: "Coding Books",
          image: "https://m.media-amazon.com/images/I/61mIq2iJUXL._SY425_.jpg",
          rating: { rate: 5, count: 1070 },
        },

        {
          title: "Cracking the Coding Interview ",
          price: 599,
          description:
            "Unleash the Ideal Candidate within you with our Top selling book in our coding community",
          category: "Coding Books",
          image: "https://m.media-amazon.com/images/I/61mIq2iJUXL._SY425_.jpg",
          rating: { rate: 5, count: 78 },
        },
        {
          title: "System Design Interview: An Insider's Guide",
          price: 1400,
          description:
            "Unleash the Ideal Candidate within you with our Top selling book in our coding community",
          category: "Coding Books",
          image: "https://m.media-amazon.com/images/I/61Wot+AplwL._SY425_.jpg",
          rating: { rate: 5, count: 900 },
        },
        {
          title: "Coding Interview Questions",
          price: 711,
          description:
            "Unleash the Ideal Candidate within you with our Top selling book in our coding community",
          category: "Coding Books",
          image:
            "https://m.media-amazon.com/images/I/516TypsFf5L._SX342_SY445_.jpg",
          rating: { rate: 3, count: 1020 },
        },
        {
          title: "DSA in Java",
          price: 711,
          description:
            "Explore the dynamic synergy of Java in our DSA book, where its robust features amplify the elegance and efficiency of Data Structures and Algorithms, unlocking the true potential of your coding journey.",
          category: "Coding Books",
          image: "https://m.media-amazon.com/images/I/719IK1F27LL._SY425_.jpg",
          rating: { rate: 4.2, count: 1000 },
        },

        {
          title: "Acer Chromebox ",
          price: 18711,
          description:
            "Acer Chromebox Business Class Mini PC Secure, Scalable and Robust Architecture with limitless expansion possibilities. This desktop computer has features like Intel i7 8th Gen processor with 1.8 GHz up to 4 GHz with Intel Turbo Boost Technology , 16 GB RAM, 512 GB SSD making it the perfect mini desktop pc to carry out all tasks in one place",
          category: "PC Accessories",
          image: "https://m.media-amazon.com/images/I/312m0D-PDEL.jpg",
          rating: { rate: 4.2, count: 120 },
        },

        {
          title: "Web Development",
          price: 200,
          description:
            "Explore the world of Web Development with our diverse content inside the book.",
          category: "Coding Books",
          image: "https://m.media-amazon.com/images/I/61rkWdRWGSL._SY425_.jpg",
          rating: { rate: 5, count: 100 },
        },
        {
          title: "Portable Laptop Stand",
          price: 160,
          description:
            "The Laptop stand designed with a zinc alloy shield is small in size and strong in load-bearing. The upgraded rubber pad is used in contact with the desktop, which can effectively protect your office equipment and play a non-slip ef",
          category: "PC Accessories",
          image: "https://m.media-amazon.com/images/I/41EwUDtXq3L.jpg",
          rating: { rate: 2.2, count: 1050 },
        },
        {
          title: "Zebronics ZEB-90HB USB Hub, 4 Ports",
          price: 170,
          description:
            "4-Port USB 2.0 Hub. Cable length 50 cmUseful for Laptops, PC & Computers, Mac bookPocket Sized, Easy to Carry",
          category: "PC Accessories",
          image: "https://m.media-amazon.com/images/I/51iJqee2l3S._SX569_.jpg",
          rating: { rate: 4.2, count: 190 },
        },
        {
          title: "CEZI USB Microphone",
          price: 2349,
          description:
            "Vivid RGB & Quick Mute-Polished black gaming mic body with automatic changing RGB, matching flowing rainbow light computer build, shows your calm and luxury of gamer device.",
          category: "PC Accessories",
          image: "https://m.media-amazon.com/images/I/411fi+VW0SL._SY450_.jpg",
          rating: { rate: 4.2, count: 190 },
        },
        {
          title: "While Loop tshirt",
          price: 499,
          description:
            "Count on this t-shirt to remain vibrant and true to size, standing the test of time.",
          category: "Coder's clothing",
          image: "https://m.media-amazon.com/images/I/51R70m41beL._SX679_.jpg",
          rating: { rate: 4.7, count: 145 },
        },
        {
          title: "Code = Coffee tshirt",
          price: 399,
          description:
            "Count on this t-shirt to remain vibrant and true to size, standing the test of time.",
          category: "Coder's clothing",
          image: "https://m.media-amazon.com/images/I/41yGDXvcRFL._SX679_.jpg",
          rating: { rate: 4.8, count: 145 },
        },
        {
          title: "if() Block tshirt",
          price: 499,
          description:
            "Count on this t-shirt to remain vibrant and true to size, standing the test of time.",
          category: "Coder's clothing",
          image: "https://m.media-amazon.com/images/I/61ulU91TI3L._SX679_.jpg",
          rating: { rate: 4.2, count: 145 },
        },
      ];

      await Product.insertMany(products);
      console.log("Initial data loaded successfully");
    } else {
      console.log("Data already exists, skipping initial data load");
    }
  } catch (error) {
    console.error("Error loading initial data:", error.message);
  }
};

module.exports = { connect };
