import { FaCode, FaSearch } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignIn from "./SignIn";
function Nav() {
  const [logSign, setlogSign] = useState(true);

  const p = useSelector((state) => state.cart.data);
  console.log(p);

  const user = useSelector((state) => state.user);
  useEffect(() => {
    document.title = "CodeVerce - " + user.data.username;
  }, []);

  return (
    <nav>
      <div className="navbar fixed z-30 justify-between bg-base-300 h-[8vh]  ">
        <div className="navbar-start gap-[2rem] text-gray-700 dark:text-gray-200 ">
          <motion.div
            initial={{ scale: 10 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
            className="font-semibold jusc text-[#62F700] text-[22.5px] relative"
          >
            CodeVerse{" "}
            <div className="absolute right-[-1.5rem] bottom-[-0.3rem]  text-xl text-red-500">
              <FaCode />
            </div>
          </motion.div>
        </div>

        <div className="navbar-center hidden ml-[-10rem] gap-[12rem] text-gray-700 dark:text-gray-200 lg:flex">
          <div className="box-border p-2 border-2 border-transparent hover:border-black  ml-[-9rem] flex items-center t ">
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
            <img src="/public/download.png" className="h-10" alt="" />
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
            <Link to="/checkout" className="text-2xl text-green-400 ">
              <div className="box-border relative p-2 border-2 border-transparent hover:border-black ">
                <RiShoppingCartFill className="" />
                <span className="absolute font-extrabold text-red-500 text-sm bottom-[-0.7rem] right-[-0.5rem]">
                  {p.length}
                </span>
              </div>
            </Link>
          </div>
        </div>

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box !max-w-screen-lg h-[80vh] overflow-hidden relative p-1 !rounded-[0.4rem]">
            <div className="flex h-full ">
              <div className="left w-1/3  h-full bg-[url('https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg')] bg-cover bg-center "></div>
              <div className="relative flex items-center justify-center w-2/3 h-full bg-white right">
                {logSign ? (
                  <Login logSign={logSign} setlogSign={setlogSign} />
                ) : (
                  <SignIn logSign={logSign} setlogSign={setlogSign} />
                )}
                <div
                  onClick={() => setlogSign(!logSign)}
                  className={`absolute -left-[8rem] ${
                    logSign ? "bg-white" : null
                  } top-40 text-xl p-3 rounded-l-xl px-10`}
                >
                  Login
                </div>
                <div
                  onClick={() => setlogSign(!logSign)}
                  className={`absolute -left-[8rem] ${
                    !logSign ? "bg-white" : null
                  } top-56 text-xl p-3 rounded-l-xl px-10 `}
                >
                  Signin
                </div>
              </div>
            </div>
            <form method="dialog" className="absolute bottom-3 right-2">
              <button className="btn">Close</button>
            </form>
          </div>
        </dialog>
      </div>
    </nav>
  );
}

export default Nav;
