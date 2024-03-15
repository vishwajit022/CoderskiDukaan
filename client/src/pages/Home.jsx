import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Nav from "../components/Nav";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductData } from "../redux/productsReducer";
import { categoryAsync } from "../redux/categoryReducer";
import { setData } from "../redux/userReducer";
import { userId } from "../api/api.user";

function Home() {
  useEffect(() => {
    const CurrentUser = localStorage.getItem("userid");
    const fetchUser = async () => {
      if (CurrentUser) {
        const user = await userId({ id: CurrentUser });
        d(setData(user));
      }
    };
    fetchUser();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const d = useDispatch();

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 13000);

    return () => clearTimeout(delay);
  }, []);
  return (
    <div className="">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <Categories />
          <ProductList />
          <div className="pb-10"></div>
        </>
      )}
    </div>
  );
}

export default Home;
