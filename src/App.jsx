import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Header from "./components/Header";
import MyQueue from "./pages/MyQueue";
import Fav from "./pages/Fav";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Movies />} />
					<Route path="/my-queue" element={<MyQueue />} />
					<Route path="/fav" element={<Fav />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
export default App;
