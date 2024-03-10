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
      className="card w-[21.97rem] bg-base-100 shadow-xl">

        <motion.div className="bg-base-300" variants={itemVariants} >
          <figure>
            <motion.img 
            className="w-full h-[23rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={image} alt="Shoes" />
          </figure>
        </motion.div>
        
        <motion.div
          className="card-body">
          <motion.h2 variants={itemVariants} className="card-title h-10 ">{title}</motion.h2>
          <div className="flex" >Rs. <div className="mb-3 font-bold">{price}</div></div>
          <motion.div
          variants={itemVariants}
          className="card-actions flex justify-between">
            <button className="btn bg-base-300">Buy Now</button>
            <button className="btn bg-base-300">Add to Cart</button>
          </motion.div>
        </motion.div>
    </motion.div>
  );
}

export default ProductCard;
