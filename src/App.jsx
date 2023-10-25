import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./pages/Movies/Movies";
import Header from "./components/Header";

const App = () => {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Movies />} />
			</Routes>
		</>
	);
};
export default App;
