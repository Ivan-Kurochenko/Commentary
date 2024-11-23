import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "../reducers/comment.js";

export default configureStore({
  reducer: {
    comments: commentReducer,
  },
});
