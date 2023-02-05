import { createSlice } from "@reduxjs/toolkit";

export const userPreferencesSlice = createSlice({
  name: "userPreferences",
  initialState: {
    country: "us",
    language: "en",
    keywords: "price",
    sortMethod: "publishedAt",
    markedSources: "",
  },
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },

    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setKeywords: (state, action) => {
      state.keywords = action.payload;
    },
    resetKeywords: (state) => {
      state.keywords = "";
    },
    setSortMethod: (state, action) => {
      state.sortMethod = action.payload;
    },
    resetSortMethod: (state) => {
      state.sortMethod = "";
    },
    setMarkedSources: (state, action) => {
      state.markedSources = action.payload.join("");
    },
    resetMarkedSources: (state) => {
      state.markedSources = "";
    },
  },
});

export const selectCurrentCountry = (state) => state.userPreferences.country;
export const selectCurrentLanguage = (state) => state.userPreferences.language;
export const selectCurrentKeywords = (state) => state.userPreferences.keywords;
export const selectMarkedSources = (state) =>
  state.userPreferences.markedSources;
export const selectCurrentSortMethod = (state) =>
  state.userPreferences.sortMethod;

export const {
  setCountry,
  setLanguage,
  setKeywords,
  setSortMethod,
  resetKeywords,
  resetSortMethod,
  setMarkedSources,
  resetMarkedSources,
} = userPreferencesSlice.actions;

export default userPreferencesSlice.reducer;
