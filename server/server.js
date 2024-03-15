// index.js
require("dotenv").config();
require("./utils/db.js").connect();
const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
//Middleware Routes
const authRoute = require("./routes/auth.js");
const productsRoute = require("./routes/products.js");
const categoriesRoute = require("./routes/categories.js");
const cartRoute = require("./routes/cart.js");

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productsRoute);
app.use("/api/v1/categories", categoriesRoute);
app.use("/api/v1/cart", cartRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Coder's ki dukan mein Aapka swagat hai!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
