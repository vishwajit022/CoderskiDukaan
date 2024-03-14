// src/components/ProductList.js

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { data } = useSelector((state) => state.products);

  const user = useSelector((state) => state.user);
  
  console.log(user);

  return (
    <div className="">
      <h1 className="text-2xl font-semibold text-center mb-7 ">
        Everything a coder needs
      </h1>
      <motion.div className="flex flex-wrap justify-center gap-[4vw]">
        {data.map((product) => (
          <ProductCard User={user} className="flex " key={product._id} props={product} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProductList;
