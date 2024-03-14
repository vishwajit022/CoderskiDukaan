// Checkout.js
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

function Checkout() {
  const products = useSelector((state) => state.cart.data); // Accessing state correctly
  console.log(products);
  return (
    <div className="flex p-5 ">
      <div className="left w-[70%] p-2 px-6 h-full bg-white ">
        <div className="flex justify-between py-6 ">
          <h1 className="text-[4vh] font-bold ">Checkout</h1>
          <h1 className="text-[4vh] font-bold ">{products.length} items</h1>
        </div>
        <hr className="mx-8" />
        <div className="">
          {products &&
            products.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}{" "}
          {/* Passing item prop */}
        </div>
      </div>
      <div className="right w-[30%] bg-red-200  "></div>
    </div>
  );
}

export default Checkout;
