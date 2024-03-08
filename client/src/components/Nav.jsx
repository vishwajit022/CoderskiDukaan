import { FaCode, FaSearch } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";

function Nav() {
  return (
    <div className="bg-[#131921] text-[#62F700] pl-7 pr-10 center flex items-center h-[10vh]  justify-between">
      <div className=" flex items-center  gap-16 text-3xl">
        <div className="font-semibold relative">
          CodeVerse{" "}
          <div className="absolute right-[-1.5rem] bottom-[-0.3rem]  text-xl text-gray-400">
            <FaCode />
          </div>{" "}
        </div>
        <div className="flex hover:border-2 hover:p-1  border-gray-300 text-white items-center">
          <MdLocationOn />
          <div className="text-sm">
            Delivering All
            <div className="">Across India</div>
          </div>
        </div>
        <div className=" flex items-center rounded-md overflow-hidden ">
          <input
            className="text-black text-sm w-[30vw] h-10 pl-2"
            type="text"
          />
          <button className="bg-orange-400 h-10 text-white p-1 overflow-hidden h-full">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="flex items-center text-white gap-2">
        <div className=" text-center flex flex-col  ">
          <div className="">Built</div>
          <div className="mt-[-7px]"> with 💖</div>
        </div>
        <img src="../../public/download.png" className="h-10" alt="" />
      </div>
      <div className="flex items-center gap-10">
        <div className="text-white text-sm ">
          <div className="font-normal">Hello, User</div>
          <div className="font-semibold">Your Account</div>
        </div>
        <div className="text-2xl  ">
          <div className="relative hover:border-2 hover:p-1  border-gray-300">
            <RiShoppingCartFill className="" />
            <span className="absolute font-extrabold text-red-500 text-sm bottom-[-0.7rem] right-[-0.5rem]">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
