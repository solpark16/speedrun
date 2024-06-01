import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogIn: false };

export const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		logInToggle: (state, actions) => {
			state.isLogIn = actions.payload;
		}
	}
});

export const { logInToggle } = userSlice.actions;
export default userSlice.reducer;
