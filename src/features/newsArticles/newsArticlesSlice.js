import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadArticlesSortedByPopularity = createAsyncThunk(
  "newsArticles/loadArticlesSortedByPopularity",
  async ({ language, q }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: "https://newsapi.org/v2/everything",
        headers: { "X-Api-Key": "21561b62354b42e09b27d5d359f870b8" },
        params: {
          language: language,
          q: q,
          pageSize: 4,
        },
      });

      if (!response.status === 200) {
        throw new Error("Server Error.");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadArticlesSortedByRelevancy = createAsyncThunk(
  "newsArticles/loadArticlesSortedByRelevancy",
  async ({ language, q }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: "https://newsapi.org/v2/everything",
        headers: { "X-Api-Key": "21561b62354b42e09b27d5d359f870b8" },
        params: {
          language: language,
          q: q,
          pageSize: 10,
        },
      });

      if (!response.status === 200) {
        throw new Error("Server Error.");
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
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
      });
  },
});

export const selectNewsArticles = (state) => state.newsArticles.articles;
export const newsArticlesStatus = (state) => state.newsArticles.status;
export const newsArticlesError = (state) => state.newsArticles.error;
export const newsArticlesTotalResults = (state) =>
  state.newsArticles.totalResults;

export default newsArticlesSlice.reducer;
