import { FaCode, FaSearch } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import Login from "./Login";
import { useSelector } from 'react-redux';
import { useEffect } from "react";


function Nav() {

  const user  = useSelector((state) => state.user);
  useEffect(()=>{
    document.title = user.data.username;
  },[])

  return (
    <nav>
        <div className="navbar bg-base-300 h-[8vh] px-[1.5rem] ">
          <div className="navbar-start gap-[5rem] text-gray-700 dark:text-gray-200 ">
            <div className="font-semibold jusc text-[#62F700] text-[22.5px] relative">
              CodeVerse{" "}
              <div className="absolute right-[-1.5rem] bottom-[-0.3rem]  text-xl text-red-500">
              <FaCode />
              </div>
            </div>
          </div>


          <div className="navbar-center hidden mx-4 gap-[8rem] text-gray-700 dark:text-gray-200 lg:flex">
            <div className="flex border-2 border-transparent p-2 box-border hover:border-white   items-center">
                <span className="text-3xl" ><MdLocationOn /></span>
                <div className="text-sm">
                  Delivering All
                  <div className="">Across India</div>
                </div>
              </div>
              <label className="input input-bordered w-[35rem]  flex items-center gap-2">
                <input type="text" className="grow " placeholder="Search" />
                <FaSearch />
              </label>
              <div className="flex items-center text-gray-700 dark:text-gray-200 gap-2">
              <div className=" text-center flex flex-col text-xl ">
                <div className="">Built</div>
                <div className="mt-[-7px]"> with 💖</div>
              </div>
              <img src="../../public/download.png" className="h-10" alt="" />
            </div>
          </div>

          
          <div className="navbar-end text-gray-700 dark:text-gray-200">
            <div className="flex items-center gap-10">
            <div
            onClick={()=>document.getElementById('my_modal_5').showModal()}
            className="hover:bg-base-100 p-2 rounded-sm text-sm ">
              <div className="font-normal">Hello, {user.data.username}</div>
              <div className="font-semibold">Your Account</div>
            </div>
            <div className="text-2xl text-green-400 ">
              <div className="relative border-2 border-transparent p-2 box-border hover:border-white  ">
                <RiShoppingCartFill className="" />
                <span className="absolute font-extrabold text-red-500 text-sm bottom-[-0.7rem] right-[-0.5rem]">
                  0
                </span>
              </div>
            </div>
          </div>
          </div>

          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box ">
              <Login />
            </div>
          </dialog>
        </div>
      </nav>
  );
}

export default Nav;
