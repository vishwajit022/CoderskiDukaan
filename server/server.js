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
app.use(bodyParser.json());
//Middleware Routes
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/products");
app.use("/auth", authRoute);
app.use("/products", productsRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Coder's ki dukan mein Aapka swagat hai!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
