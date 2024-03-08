import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: [],
  },
  reducers: {
    cat: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { cat } = categorySlice.actions;
export default categorySlice.reducer;

export const categoryAsync = () => async (dispatch) => {
  try {
    axios
      .get("http://localhost:5000/api/v1/categories")
      .then((res) => dispatch(categorySlice.actions.cat(res.data)))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
