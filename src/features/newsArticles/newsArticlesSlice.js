import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getArticles } from "../../api/apiRequests";

export const loadArticles = createAsyncThunk(
  "newsArticles/loadArticles",
  getArticles
);

export const newsArticlesSlice = createSlice({
  name: "newsArticles",
  initialState: {
    totalResults: 0,
    articles: [],
    status: "",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadArticles.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadArticles.fulfilled, (state, action) => {
        state.status = "resolved";
        state.error = null;
        state.totalResults = action.payload.totalResults;
        state.articles = action.payload.articles.map((article) => ({
          ...article,
          id: article.url,
        }));
      })
      .addCase(loadArticles.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const selectNewsArticles = (state) => state.newsArticles.articles;
export const newsArticlesStatus = (state) => state.newsArticles.status;
export const newsArticlesError = (state) => state.newsArticles.error;
export const newsArticlesTotalResults = (state) =>
  state.newsArticles.totalResults;

export default newsArticlesSlice.reducer;
