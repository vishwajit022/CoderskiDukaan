import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaRegCalendarAlt,
  FaExchangeAlt,
  FaShippingFast,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { cartAsync, removeFromCartAsync } from "../redux/cartReducer";

function Product() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const showToast = () => {
    toast.success("Added to your Cart!");
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/products/${id}`
      );
      setData(response.data); // Assuming your data is in response.data
      console.log(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const d = useDispatch();
  const userID = 1;
  const handleAddToCart = async (id) => {
    d(cartAsync(id));
    showToast();
    console.log(`Product added to cart: ${id}`);
  };

  useEffect(() => {
    fetchData(); // Call the function to fetch data when the component mounts
  }, [id]); // Add 'id' as a dependency to re-fetch data when the id changes

  return (
    <div className="w-full h-screen">
      {/* Render your product data here */}

      <div className="flex items-center justify-center pt-[15vh] pl-[5vw] pr-[20vw]">
        <div className="w-[30vw] mt-[-30vh] h-[30vh] ">
          <img src={data.image} alt="" />
        </div>
        <div className="flex flex-col pl-20">
          <h1 className="pt-[8vh] text-4xl font-bold ">{data.title}</h1>
          <div className="pt-10">{data.description}</div>
          <div className="flex pt-10 mx-auto animate-bounce ">
            {" "}
            Rs. <div className="font-bold">{data.price}</div>
          </div>
          <div className="mx-auto mt-[5vh]">
            <button
              className="bg-[#FB923C] p-2 rounded-md "
              onClick={() => handleAddToCart(id)}
            >
              Add to Cart
            </button>
          </div>
          <div className="flex mt-[5vh] items-center justify-center gap-7">
            <div className="flex flex-col items-center justify-center">
              <FaRegCalendarAlt className="text-2xl icon" />
              <span>30 days return</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaExchangeAlt className="text-2xl icon" />
              <span>Replacement</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <FaShippingFast className="text-2xl icon" />
              <span>Free shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
