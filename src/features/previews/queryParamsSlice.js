import { createSlice } from "@reduxjs/toolkit";

export const queryParamsSlice = createSlice({
  name: "queryParams",
  initialState: {
    country: "us",
    category: "general",
    q: "",
  },
  reducers: {
    setQueryParams: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const selectQueryParams = (state) => state.queryParams;
export const { setQueryParams } = queryParamsSlice.actions;

export default queryParamsSlice.reducer;
