import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: "",
  reducers: {
    setCategory: (state, action) => {
      return action.payload;
    },
  },
});

export const selectCategory = (state) => state.category;
export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
