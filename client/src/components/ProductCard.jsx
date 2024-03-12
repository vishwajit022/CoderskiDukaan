import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function ProductCard({ props }) {
  const { image, title, price, _id } = props;
  console.log(_id);

  const containerVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - rect.height / 2;

      if (isVisible) {
        containerRef.current.style.visibility = "visible";
        containerRef.current.style.opacity = 1;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      to={`/product/${_id}`}
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="card w-[21.97rem] bg-base-100 shadow-xl"
    >
      <motion.div className="bg-base-300" variants={itemVariants}>
        <figure>
          <motion.img
            className="w-full h-[23rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={image}
            alt="Shoes"
          />
        </figure>
      </motion.div>

      <motion.div className="card-body">
        <motion.h2 variants={itemVariants} className="h-10 mx-auto card-title">
          {title}
        </motion.h2>
        <div className="flex">
          <div className="mx-auto mb-3 font-bold">Rs. {price}</div>
        </div>
        <motion.div
          variants={itemVariants}
          className="flex justify-between card-actions"
        >
          <div></div>
          <Button className="btn bg-base-300">Add to Cart</Button>
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default ProductCard;
