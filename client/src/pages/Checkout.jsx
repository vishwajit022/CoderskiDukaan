// Checkout.js
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Checkout() {
  const products = useSelector((state) => state.cart.data); // Accessing state correctly
  console.log(products);
  return (
    <div className="flex w-full h-full p-5 ">
      <div className="left w-[70%] p-2 px-6  bg-white ">
        <div className="flex justify-between py-6 ">
          <h1 className="text-[4vh] font-bold ">Checkout</h1>
          <h1 className="text-[4vh] font-bold ">{products.length} items</h1>
        </div>
        <hr className="mx-8" />
        <div className="overflow-y-auto">
          {products &&
            products.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}{" "}
          {/* Passing item prop */}
        </div>
        <div className="mx-[40%] ">
          <Link to="/" className="bg-[#FB923C] p-3   rounded-md ">
            Go back
          </Link>
        </div>
      </div>
      <div className="right w-[30%] bg-red-200  "></div>
    </div>
  );
}

export default Checkout;
