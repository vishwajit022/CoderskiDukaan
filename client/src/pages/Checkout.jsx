import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

function Checkout() {
  const products = useSelector((e) => console.log(e));
  return (
    <div className="flex p-5 ">
      <div className="left w-[70%] p-2 px-6 bg-white ">
        <div className="flex justify-between py-6 ">
          <h1 className="text-[2vh] font-bold ">Checkout</h1>
          <h1 className="text-[2vh] font-bold ">3 items</h1>
        </div>
        <hr className="mx-8" />
        <div>
          <CartItem />
        </div>
      </div>
      <div className="right w-[30%] bg-red-200  "></div>
    </div>
  );
}

export default Checkout;
