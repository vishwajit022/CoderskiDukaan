// src/components/ProductList.js

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { data } = useSelector((state) => state.products);

  return (
    <div className="pl-20">
      <h1 className="text-2xl font-semibold text-center mb-7 ">
        Everything a coder needs
      </h1>
      <motion.div className="flex flex-wrap gap-[4vw]">
        {data.map((product) => (
          <ProductCard className="flex " key={product._id} props={product} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProductList;
