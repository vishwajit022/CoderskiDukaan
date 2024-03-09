import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsReducer";
import categoryReducer from "./categoryReducer";

export default configureStore({
  reducer: {
    products: productsReducer,
    category: categoryReducer,
  },
});
