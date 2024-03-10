import React from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const products = useSelector((e) => console.log(e));
  return <div>Checkout</div>;
}

export default Checkout;
