import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNewsSources } from "../../api/apiRequests";

export const loadNewsSources = createAsyncThunk(
  "newsSources/loadNewsSources",
  getNewsSources
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
