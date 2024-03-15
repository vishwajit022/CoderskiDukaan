import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { cartAsync } from "../redux/cartReducer";

function ProductCard({ props, User }) {
  const { image, title, price, _id } = props;

  const showToast = () => {
    toast.success("Added to your Cart!");
  };

  const dispatch = useDispatch();

  const handleAddToCart = async (productID) => {
    // Perform the necessary actions to add the product to the cart
    // For demonstration purposes, let's just show the toast notification
    try {
      await dispatch(cartAsync(productID));
      showToast();
      console.log(`Product added to cart: ${productID}`);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="card w-[21.97rem] bg-base-100 shadow-xl">
      <Link to={`/product/${_id}`} className="card-link">
        <div className="bg-base-300">
          <figure>
            <img
              className="w-full h-[23rem] opacity-transition"
              src={image}
              alt="Shoes"
            />
          </figure>
        </div>

        <div className="card-body">
          <h2 className="h-10 mx-auto card-title">{title}</h2>
          <div className="flex">
            <div className="mx-auto mb-3 font-bold">Rs. {price}</div>
          </div>
        </div>
      </Link>

      <div className="flex mt-[-20px] justify-between card-actions">
        <div></div>
        <button
          className="btn text-white mb-4 relative overflow-hidden hover:bg-[#84542d] bg-[#FB923C] font-bold p-2 rounded-lg"
          onClick={() => handleAddToCart(_id)}
        >
          Add to Cart
        </button>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
}

export default ProductCard;
