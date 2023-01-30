import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTopHeadlines } from "../../api/apiRequests";

export const loadAllHeadlines = createAsyncThunk(
  "headlines/loadAllHeadlines",
  getTopHeadlines
);

export const loadBusinessHeadlines = createAsyncThunk(
  "headlines/loadBusinessHeadlines",
  getTopHeadlines
);

export const loadEntertainmentHeadlines = createAsyncThunk(
  "headlines/loadEntertainmentHeadlines",
  getTopHeadlines
);

export const loadTechnologyHeadlines = createAsyncThunk(
  "headlines/loadTechnologyHeadlines",
  getTopHeadlines
);

export const loadSportsHeadlines = createAsyncThunk(
  "headlines/loadSportsHeadlines",
  getTopHeadlines
);

export const headlinesSlice = createSlice({
  name: "headlines",
  initialState: {
    business: { totalResults: 0, headlines: [], status: "", error: null },
    entertainment: { totalResults: 0, headlines: [], status: "", error: null },
    technology: { totalResults: 0, headlines: [], status: "", error: null },
    sports: { totalResults: 0, headlines: [], status: "", error: null },
    all: { totalResults: 0, headlines: [], status: "", error: null },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBusinessHeadlines.pending, (state) => {
        state.business.status = "loading";
        state.business.error = null;
      })
      .addCase(loadBusinessHeadlines.fulfilled, (state, action) => {
        state.business.status = "resolved";
        state.business.error = null;
        state.business.totalResults = action.payload.totalResults;
        state.business.headlines = action.payload.articles.map((article) => ({
          ...article,
          id: article.url,
        }));
      })
      .addCase(loadBusinessHeadlines.rejected, (state, action) => {
        state.business.status = "rejected";
        state.business.error = action.payload;
      })
      .addCase(loadEntertainmentHeadlines.pending, (state) => {
        state.entertainment.status = "loading";
        state.entertainment.error = null;
      })
      .addCase(loadEntertainmentHeadlines.fulfilled, (state, action) => {
        state.entertainment.status = "resolved";
        state.entertainment.error = null;
        state.entertainment.totalResults = action.payload.totalResults;
        state.entertainment.headlines = action.payload.articles.map(
          (article) => ({
            ...article,
            id: article.url,
          })
        );
      })
      .addCase(loadEntertainmentHeadlines.rejected, (state, action) => {
        state.entertainment.status = "rejected";
        state.entertainment.error = action.payload;
      })
      .addCase(loadTechnologyHeadlines.pending, (state) => {
        state.technology.status = "loading";
        state.technology.error = null;
      })
      .addCase(loadTechnologyHeadlines.fulfilled, (state, action) => {
        state.technology.status = "resolved";
        state.technology.error = null;
        state.technology.totalResults = action.payload.totalResults;
        state.technology.headlines = action.payload.articles.map((article) => ({
          ...article,
          id: article.url,
        }));
      })
      .addCase(loadTechnologyHeadlines.rejected, (state, action) => {
        state.technology.status = "rejected";
        state.technology.error = action.payload;
      })
      .addCase(loadSportsHeadlines.pending, (state) => {
        state.sports.status = "loading";
        state.sports.error = null;
      })
      .addCase(loadSportsHeadlines.fulfilled, (state, action) => {
        state.sports.status = "resolved";
        state.sports.error = null;
        state.sports.totalResults = action.payload.totalResults;
        state.sports.headlines = action.payload.articles.map((article) => ({
          ...article,
          id: article.url,
        }));
      })
      .addCase(loadSportsHeadlines.rejected, (state, action) => {
        state.sports.status = "rejected";
        state.sports.error = action.payload;
      })
      .addCase(loadAllHeadlines.pending, (state) => {
        state.all.status = "loading";
        state.all.error = null;
      })
      .addCase(loadAllHeadlines.fulfilled, (state, action) => {
        state.all.status = "resolved";
        state.all.error = null;
        state.all.totalResults = action.payload.totalResults;
        state.all.headlines = action.payload.articles.map((article) => ({
          ...article,
          id: article.url,
        }));
      })
      .addCase(loadAllHeadlines.rejected, (state, action) => {
        state.all.status = "rejected";
        state.all.error = action.payload;
      });
  },
});

export default headlinesSlice.reducer;
