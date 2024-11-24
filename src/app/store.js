import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import commentReducer from "../reducers/comment.js";
import { thunk } from "redux-thunk";

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  combineReducers({
    comments: commentReducer,
  }),
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});
export const persistor = persistStore(store);
