import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    cart: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { cart } = cartSlice.actions;
export default cartSlice.reducer;

export const cartAsync =
  ({ _id }) =>
  async (dispatch) => {
    try {
      axios
        .get(`http://localhost:5000/api/v1/products/${_id}`)
        .then((res) => dispatch(cartSlice.actions.cart(res.data)))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
