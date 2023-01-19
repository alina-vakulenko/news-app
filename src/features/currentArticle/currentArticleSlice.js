import { createSlice } from "@reduxjs/toolkit";

export const currentArticleSlice = createSlice({
  name: "currentArticle",
  initialState: {},
  reducers: {
    dispalayCurrentArticle: (state, action) => {
      return action.payload;
    },
    hideCurrentArticle: (state) => {
      return {};
    },
  },
});

export const selectCurrentArticle = (state) => state.currentArticle;
export const { dispalayCurrentArticle, hideCurrentArticle } =
  currentArticleSlice.actions;

export default currentArticleSlice.reducer;
