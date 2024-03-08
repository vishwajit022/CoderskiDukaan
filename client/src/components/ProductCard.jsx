import React from "react";
import { motion } from "framer-motion";

function ProductCard({ props }) {
  const { category, description, image, price, title } = props;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="bg-white flex flex-col items-center justify-center w-[40vh] h-[20vw]"
    >
      <div className="h-[30vh]">
        <motion.img
          src={image}
          className="w-full object-contain h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          alt=""
        />
      </div>

      <motion.h1
        className="text-center mt-1"
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
        <div className="font-bold"> {price}</div>
      </motion.div>
    </motion.div>
  );
}

export default ProductCard;
