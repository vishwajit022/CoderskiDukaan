// Checkout.js
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import Payment from "../components/Payment";

function Checkout() {
  const products = useSelector((state) => state.cart.data); // Accessing state correctly
  console.log(products);

  // Calculate subtotal
  const subtotal = products.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="flex w-full h-full p-5 bg-slate-400">
      <div className="left w-[70%] p-2 px-6 rounded-lg bg-white">
        <div className="flex justify-between py-6">
          <h1 className="text-[4vh] font-bold">Checkout</h1>
          <h1 className="text-[4vh] font-bold">{products.length} items</h1>
        </div>
        <hr className="mx-8" />
        <div className="overflow-y-auto">
          {products &&
            products.map((item) => <CartItem key={item._id} item={item} />)}
          {/* Passing item prop */}
        </div>
        <div className="mx-[40%]">
          <Link to="/" className="bg-[#FB923C] p-3   rounded-md ">
            Go back
          </Link>
        </div>
      </div>
      <div className="right w-[30%]">
        {/* Subtotal section */}
        <div className="p-4">
          <div className="flex justify-between mt-5">
            <h2 className="mb-2 text-xl font-bold">Subtotal</h2>
            <div className="text-lg font-bold">Rs. {subtotal}</div>
          </div>

          <Payment amount={subtotal} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
