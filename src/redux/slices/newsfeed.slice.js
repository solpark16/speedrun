import { createSlice } from "@reduxjs/toolkit";

const initialState = { list: [] };

export const newsfeedSlice = createSlice({
	name: "newsfeed",
	initialState: initialState,
	reducers: {
		getInitalFeed: (state, action) => {
			state.list = action.payload;
		},
		addNewsfeed: (state, action) => {
			state.list = [...state.list, action.payload];
		},
		updateLike: (state, action) => {
			state.list = state.list.map((newsfeed) => {
				if (action.payload.id == newsfeed.id) {
					return { ...newsfeed, like: action.payload.like };
				}
				return newsfeed;
			});
		}
	}
});

export const { getInitalFeed, addNewsfeed, updateLike } = newsfeedSlice.actions;
export default newsfeedSlice.reducer;
