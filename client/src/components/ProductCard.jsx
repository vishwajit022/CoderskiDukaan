import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

function ProductCard({ props }) {
  const { image, title, price } = props;

  const containerVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white flex flex-col items-center justify-center w-[40vh] h-[28vw]"
    >
      <motion.div variants={itemVariants} className="h-[26vh]">
        <motion.img
          src={image}
          className="object-contain w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          alt=""
        />
      </motion.div>

      <motion.h1 variants={itemVariants} className="mt-1 text-center">
        {title}
      </motion.h1>
      <motion.div
        variants={itemVariants}
        className="flex justify-center text-center"
      >
        Rs. <div className="mb-3 font-bold">{price}</div>
      </motion.div>

      <Button>Add to Cart</Button>
    </motion.div>
  );
}

export default ProductCard;
