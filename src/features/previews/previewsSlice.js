import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadAllPreviews = createAsyncThunk(
  "previews/loadAllPreviews",
  async ({ country, category, q }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: "https://newsapi.org/v2/top-headlines",
        headers: { "X-Api-Key": "21561b62354b42e09b27d5d359f870b8" },
        params: {
          country: country,
          category: category,
          q: q,
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

export const previewsSlice = createSlice({
  name: "previews",
  initialState: {
    totalResults: 0,
    articles: [],
    status: "",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllPreviews.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadAllPreviews.fulfilled, (state, action) => {
        state.status = "resolved";
        state.error = null;
        state.totalResults = action.payload.totalResults;
        state.articles = action.payload.articles.map((article) => ({
          ...article,
          id: article.url,
        }));
      })
      .addCase(loadAllPreviews.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const selectArticles = (state) => state.previews.articles;
export const selectArticlesStatus = (state) => state.previews.status;
export const selectArticlesError = (state) => state.previews.error;
export const selectTotalResults = (state) => state.previews.totalResults;

export default previewsSlice.reducer;
