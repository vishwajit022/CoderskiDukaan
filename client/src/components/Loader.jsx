import React from "react";

function Loader() {
  return (
    <div className="relative flex flex-col bg-white ">
      <img src="/running-gif.gif" className="w-screen h-screen " alt="" />
      <h1 className="absolute right-[30%] top-8 text-2xl ">
        <h1 className="text-center text-[6vh]">Loading....</h1>
        <h1>Please be patient while we set things up for you</h1>
      </h1>
    </div>
  );
}

export default Loader;
