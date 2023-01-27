import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadNewsSources = createAsyncThunk(
  "newsSources/loadNewsSources",
  async ({ country, language, category }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: "https://newsapi.org/v2/top-headlines/sources",
        headers: { "X-Api-Key": "21561b62354b42e09b27d5d359f870b8" },
        params: {
          country: country,
          language: language,
          category: category,
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

export const newsSourcesSlice = createSlice({
  name: "newsSources",
  initialState: {
    sources: [],
  },
  extraReducers: (builder) => {
    builder.addCase(loadNewsSources.fulfilled, (state, action) => {
      state.sources = action.payload.sources;
    });
  },
});

export const selectNewsSources = (state) => state.newsSources.sources;

export default newsSourcesSlice.reducer;
