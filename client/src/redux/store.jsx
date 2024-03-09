import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";

export default configureStore({
  reducer: {
    products: productsReducer,
    category: categoryReducer,
    user: userReducer,
  },
});
