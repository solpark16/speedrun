import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { logInToggle, setCurrentUser } from "./redux/slices/user.slice";
import router from "./routes/router";
import GlobalStyle from "./style/GlobalStyle";
import supabase from "./supabase/supabase";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((_, session) => {
			if (session) {
				dispatch(logInToggle(true));
				dispatch(setCurrentUser(session.user));
			} else {
				dispatch(logInToggle(false));
				dispatch(setCurrentUser(null));
			}
		});
		return () => subscription.unsubscribe();
	}, []);
	return (
		<>
			<GlobalStyle />
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
