import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload); // Push new data into the data array
    },
    removeFromCart: (state, action) => {
      state.data = state.data.filter((item) => item._id !== action.payload); // Remove item from data array
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export const cartAsync = (_id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/products/${_id}`
    );
    dispatch(addToCart(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCartAsync = (_id) => async (dispatch) => {
  try {
    dispatch(removeFromCart(_id));
  } catch (error) {
    console.log(error);
  }
};
