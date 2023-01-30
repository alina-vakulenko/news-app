import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getArticlesByPopularity,
  getArticlesByRelevancy,
  getArticlesByPublishedDate,
} from "../../api/apiRequests";

export const loadArticlesSortedByPopularity = createAsyncThunk(
  "newsArticles/loadArticlesSortedByPopularity",
  getArticlesByPopularity
);

export const loadArticlesSortedByRelevancy = createAsyncThunk(
  "newsArticles/loadArticlesSortedByRelevancy",
  getArticlesByRelevancy
);

export const loadArticlesSortedByPublishedDate = createAsyncThunk(
  "newsArticles/loadArticlesSortedByPublishedDate",
  getArticlesByPublishedDate
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
      .addCase(loadArticlesSortedByPopularity.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadArticlesSortedByPopularity.fulfilled, (state, action) => {
        state.status = "resolved";
        state.error = null;
        state.totalResults = action.payload.totalResults;
        state.articles = action.payload.articles.map((article) => ({
          ...article,
          id: article.url,
        }));
      })
      .addCase(loadArticlesSortedByPopularity.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(loadArticlesSortedByRelevancy.fulfilled, (state, action) => {
        state.status = "resolved";
        state.error = null;
        state.totalResults = action.payload.totalResults;
        state.articles = action.payload.articles.map((article) => ({
          ...article,
          id: article.url,
        }));
      })
      .addCase(loadArticlesSortedByPublishedDate.fulfilled, (state, action) => {
        state.status = "resolved";
        state.error = null;
        state.totalResults = action.payload.totalResults;
        state.articles = action.payload.articles.map((article) => ({
          ...article,
          id: article.url,
        }));
      });
  },
});

export const selectNewsArticles = (state) => state.newsArticles.articles;
export const newsArticlesStatus = (state) => state.newsArticles.status;
export const newsArticlesError = (state) => state.newsArticles.error;
export const newsArticlesTotalResults = (state) =>
  state.newsArticles.totalResults;

export default newsArticlesSlice.reducer;
