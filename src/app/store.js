import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "../features/comment/commentSlice";

export default configureStore({
  reducer: {
    comments: commentReducer,
  },
});
