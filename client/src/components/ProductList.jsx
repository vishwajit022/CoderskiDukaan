// src/components/ProductList.js

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pl-20">
      <h1 className="text-2xl text-center mb-7 font-semibold ">
        Everything a coder needs
      </h1>
      <motion.div className="flex flex-wrap gap-[4vw]">
        {products.map((product) => (
          <ProductCard className="flex " key={product._id} props={product} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProductList;
