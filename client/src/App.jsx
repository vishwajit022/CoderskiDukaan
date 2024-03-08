import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Nav from "./components/Nav";
import Categories from "./components/Categories";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 20000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="App bg-gray-300 h-full w-full">
      {isLoading ? (
        // Loader component (customize as needed)
        <Loader />
      ) : (
        // Render your content when not loading
        <>
          <Nav />
          <Categories />
          <ProductList />
        </>
      )}
    </div>
  );
}

export default App;
