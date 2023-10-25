import { Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies/Movies";
import Header from "./components/Header";
import MyQueue from "./pages/My-Queue/MyQueue";

const App = () => {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<Movies />} />
				<Route path="/my-queue" element={<MyQueue />} />
			</Routes>
		</>
	);
};
export default App;
