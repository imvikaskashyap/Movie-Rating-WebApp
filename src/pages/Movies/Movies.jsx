import React, { useEffect, useState } from "react";
import { AllMovies } from "../../api";

const Movies = () => {
	const [moviesData, setMoviesData] = useState([]);

	// Fetch All Movies data using AllMovies API
	const fetchMoviesData = async () => {
		try {
			const res = await AllMovies();

			setMoviesData(res.data);
		} catch (error) {
			console.error("Error fetching Movies data:", error);
		}
	};

	// Call All Movies when the All Movies component mounts
	useEffect(() => {
		fetchMoviesData();
	}, []);

	return (
		<div>
			<h1>Hiiii</h1>
		</div>
	);
};

export default Movies;
