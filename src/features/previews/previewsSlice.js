import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadAllPreviews = createAsyncThunk(
  "previews/loadAllPreviews",
  async (keywords) => {
    try {
      const response = await axios({
        method: "get",
        url: "https://newsapi.org/v2/top-headlines",
        headers: { "X-Api-Key": "21561b62354b42e09b27d5d359f870b8" },
        params: {
          country: "us",
          category: "general",
          q: keywords,
        },
      });
      return response.data.articles;
    } catch (error) {
      return error.message;
    }
  }
);

export const previewsSlice = createSlice({
  name: "previews",
  initialState: {
    articles: [],
    isLoadingPreviews: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllPreviews.pending, (state) => {
        state.isLoadingPreviews = true;
        state.hasError = false;
      })
      .addCase(loadAllPreviews.fulfilled, (state, action) => {
        state.isLoadingPreviews = false;
        state.hasError = false;
        state.articles = action.payload.map((article) => ({
          ...article,
          id: article.url,
        }));
      })
      .addCase(loadAllPreviews.rejected, (state, action) => {
        state.isLoadingPreviews = false;
        state.hasError = true;
      });
  },
});

export const selectAllPreviews = (state) => state.previews.articles;

export const isLoadingPreviews = (state) => state.previews.isLoadingPreviews;

export default previewsSlice.reducer;
