import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentUserInfo: {}, isLogIn: false };

export const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		logInToggle: (state, actions) => {
			state.isLogIn = actions.payload;
		},
		setCurrentUser: (state, actions) => {
			state.currentUserInfo = actions.payload;
		}
	}
});

export const { logInToggle, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
