import { configureStore } from "@reduxjs/toolkit";
import previewsReducer from "../features/previews/previewsSlice";
import currentArticleReducer from "../features/currentArticle/currentArticleSlice";
import categoryReducer from "../features/previews/searchArticlesSlice";

export default configureStore({
  reducer: {
    previews: previewsReducer,
    currentArticle: currentArticleReducer,
    category: categoryReducer,
  },
});
