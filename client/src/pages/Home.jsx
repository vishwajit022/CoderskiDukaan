import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Nav from "../components/Nav";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductData } from "../redux/productsReducer";
import { categoryAsync } from "../redux/categoryReducer";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const d = useDispatch();

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 12000);
    d(fetchProductData());
    d(categoryAsync());

    return () => clearTimeout(delay);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <Categories />
          <ProductList />
        </>
      )}
    </div>
  );
}

export default Home;
