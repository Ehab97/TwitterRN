import { configureStore } from "@reduxjs/toolkit";
import twitterReducer from "./reducer/tweetReducer";

export const store = configureStore({
  reducer: {
    twitter: twitterReducer,
  },
});
