import { configureStore } from "@reduxjs/toolkit";
import articlePreviewsReducer from "./features/articlePreviews/articlePreviewsSlice";
import commentsReducer from "./features/comments/commentsSlice";
import currentArticleReducer from "./features/currentArticle/currentArticleSlice";

export default configureStore({
  reducer: {
    articlePreviews: articlePreviewsReducer,
    currentArticle: currentArticleReducer,
    comments: commentsReducer,
  },
});
