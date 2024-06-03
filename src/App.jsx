import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import GlobalStyle from "./style/GlobalStyle";

function App() {
	return (
		<>
			<GlobalStyle />
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
