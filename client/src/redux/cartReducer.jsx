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
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

export const cartAsync = (_id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/products/${_id}`
    );
    dispatch(addToCart(response.data)); // Dispatch action with the response data
  } catch (error) {
    console.log(error);
  }
};
