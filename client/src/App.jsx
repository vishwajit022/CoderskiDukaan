import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./components/Error";
import Signin from "./components/Authentication/Signin";
function App() {
  return (
    <div className="App bg-gray-300 h-full w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error /> } />
      </Routes>
    </div>
  );
}

export default App;
