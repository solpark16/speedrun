import { configureStore } from "@reduxjs/toolkit";
import newsfeedSlice from "./slices/newsfeed.slice";
import userSlice from "./slices/user.slice";

export const store = configureStore({
	reducer: {
		newsfeed: newsfeedSlice,
		user: userSlice
	}
});
