import { createSlice } from "@reduxjs/toolkit";

const initialState = { list: [] };

export const newsfeedSlice = createSlice({
	name: "newsfeed",
	initialState: initialState,
	reducers: {
		getInitalFeed: (state, action) => {
			state.list = action.payload;
		}
	}
});

export const { getInitalFeed } = newsfeedSlice.actions;
export default newsfeedSlice.reducer;
