import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Signin from "./components/Authentication/Signin";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductData } from "./redux/productsReducer";
import { categoryAsync } from "./redux/categoryReducer";
function App() {
  const d = useDispatch();
  useEffect(() => {
    d(fetchProductData());
    d(categoryAsync());
  }, []);

  return (
    <div className="w-full h-full bg-gray-300 App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
