import { FaCode, FaSearch } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import Login from "./Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Nav() {
  const user = useSelector((state) => state.user);
  useEffect(() => {
    document.title = user.data.username;
  }, []);

  return (
    <nav>
      <div className="navbar bg-base-300 h-[8vh]  ">
        <div className="navbar-start gap-[2rem] text-gray-700 dark:text-gray-200 ">
          <div className="font-semibold jusc text-[#62F700] text-[22.5px] relative">
            CodeVerse{" "}
            <div className="absolute right-[-1.5rem] bottom-[-0.3rem]  text-xl text-red-500">
              <FaCode />
            </div>
          </div>
        </div>

        <div className="navbar-center hidden ml-[-10rem] gap-[8rem] text-gray-700 dark:text-gray-200 lg:flex">
          <div className="box-border p-2 border-2 border-transparent hover:border-black  ml-[-9rem] flex items-center border-2 border-transparent ">
            <span className="text-3xl">
              <MdLocationOn />
            </span>
            <div className="text-sm">
              Delivering All
              <div className="">Across India</div>
            </div>
          </div>
          <label className="input input-bordered ml-[-6rem] w-[35rem]  flex items-center ">
            <input type="text" className="grow bg- " placeholder="Search" />
            <FaSearch />
          </label>
          <div className="flex items-center gap-2 ml-[-6rem] text-gray-700 dark:text-gray-200">
            <div className="flex flex-col text-xl text-center ">
              <div className="">Built</div>
              <div className="mt-[-7px]"> with 💖</div>
            </div>
            <img src="../../public/download.png" className="h-10" alt="" />
          </div>
        </div>

        <div className="text-gray-700 ml-[-15rem] mr-[1rem] navbar-end dark:text-gray-200">
          <div className="flex items-center gap-5">
            <div
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="p-2 text-sm border-2 border-transparent rounded-sm hover:border hover:border-black "
            >
              <div className="font-normal">Hello, {user.data.username}</div>
              <div className="font-semibold">Your Account</div>
            </div>
            <div className="text-2xl text-green-400 ">
              <div className="box-border relative p-2 border-2 border-transparent hover:border-black ">
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
