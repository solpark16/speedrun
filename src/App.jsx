import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import GlobalStyle from "./style/GlobalStyle";
import supabase from "./supabase/supabase";

function App() {
	const [user, setUser] = useState(null);

	console.log(user);
	useEffect(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((_event, session) => {
			if (session) {
				console.log(session);
				setUser(session.user);
			} else {
				setUser(null);
			}
			console.log(subscription);
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
