import { createSlice } from "@reduxjs/toolkit";

export const userPreferencesSlice = createSlice({
  name: "userPreferences",
  initialState: {
    country: "us",
    language: "en",
    keywords: "ukraine",
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
  },
});

export const selectCurrentCountry = (state) => state.userPreferences.country;
export const selectCurrentLanguage = (state) => state.userPreferences.language;
export const selectCurrentKeywords = (state) => state.userPreferences.keywords;

export const { setCountry, setLanguage, setKeywords } =
  userPreferencesSlice.actions;

export default userPreferencesSlice.reducer;
