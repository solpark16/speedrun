import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import GlobalStyle from "./style/GrobalStyle";

function App() {
	const queryClient = new QueryClient();

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<GlobalStyle />
				<RouterProvider router={router}></RouterProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
