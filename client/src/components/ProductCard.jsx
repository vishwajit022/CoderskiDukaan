import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

function ProductCard({ props }) {
  const { category, description, image, price, title } = props;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="bg-white flex flex-col items-center justify-center w-[40vh] h-[28vw]"
    >
      <div className="h-[26vh] ">
        <motion.img
          src={image}
          className="object-contain w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          alt=""
        />
      </div>

      <motion.h1
        className="mt-1 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h1>
      <motion.div
        className="flex justify-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Rs.
        <div className="mb-3 font-bold"> {price}</div>
      </motion.div>

      <Button className="">Add to Cart</Button>
    </motion.div>
  );
}

export default ProductCard;
