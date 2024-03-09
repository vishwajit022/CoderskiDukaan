import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload; // Replace the existing array with the new array
    },
  },
});

// Here I will use higher-order functions to create an async function in Redux

export const fetchProductData = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/api/v1/products");
    dispatch(productsSlice.actions.setData(response.data));
  } catch (error) {
    console.error("Error fetching products:", error.message);
  }
};

export const { setData } = productsSlice.actions;
export default productsSlice.reducer;
