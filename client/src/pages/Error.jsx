import React from "react";
import Button from "../components/Button";
import { Link, NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
      <img
        draggable="false"
        className="object-contain w-screen h-screen "
        src="/routeerror.gif"
        alt=""
      />
      <NavLink
        to="/"
        className="absolute z-10 left-[45vw] bg-[#39AC31] top-[77vh] text-white px-7 py-3  "
      >
        Go Home
      </NavLink>
    </div>
  );
};

export default Error;
