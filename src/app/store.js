import { configureStore } from "@reduxjs/toolkit";
import userPreferencesReducer from "../features/userPreferences/userPreferencesSlice";
import headlinesReducer from "../features/headlines/headlinesSlice";
import currentArticleReducer from "../features/currentArticle/currentArticleSlice";
import newsArticlesReducer from "../features/newsArticles/newsArticlesSlice";
import newsSourcesReducer from "../features/newsSources/newsSourcesSlice";

export default configureStore({
  reducer: {
    userPreferences: userPreferencesReducer,
    headlines: headlinesReducer,
    newsArticles: newsArticlesReducer,
    newsSources: newsSourcesReducer,
    currentArticle: currentArticleReducer,
  },
});
