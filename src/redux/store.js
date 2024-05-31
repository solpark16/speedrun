import { configureStore } from "@reduxjs/toolkit";
import newsfeedSlice from "./slices/newsfeed.slice";

export const store = configureStore({
  reducer: {
    newsfeed: newsfeedSlice,
  },
});
