import { createSlice } from "@reduxjs/toolkit";

export const userPreferencesSlice = createSlice({
  name: "userPreferences",
  initialState: {
    country: "ua",
    language: "",
  },
  reducers: {
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const selectCurrentCountry = (state) => state.userPreferences.country;
export const selectCurrentLanguage = (state) => state.userPreferences.language;

export const { setCountry, setLanguage } = userPreferencesSlice.actions;

export default userPreferencesSlice.reducer;
