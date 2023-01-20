import { configureStore } from "@reduxjs/toolkit";
import previewsReducer from "../features/previews/previewsSlice";
import queryParamsReducer from "../features/previews/queryParamsSlice";
import currentArticleReducer from "../features/currentArticle/currentArticleSlice";

export default configureStore({
  reducer: {
    queryParams: queryParamsReducer,
    previews: previewsReducer,
    currentArticle: currentArticleReducer,
  },
});
