import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Nav from "../components/Nav";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 20000);

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
