import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Signin from "./components/Authentication/Signin";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <div className="w-full h-full bg-gray-300 App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
