// src/App.js

import React from "react";
import ProductList from "./components/ProductList";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App bg-gray-300 h-screen w-screen">
      <Nav />
      <ProductList />
    </div>
  );
}

export default App;
