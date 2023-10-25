import React, { useEffect, useState } from "react";
import { AllMovies } from "../../api";
import Moviecard from "../../components/Moviecard";
import Btn from "../../components/Btn";

const Movies = () => {
	const [moviesData, setMoviesData] = useState([]);
	console.log(moviesData);

	// Fetch All Movies data using AllMovies API
	const fetchMoviesData = async () => {
		try {
			const res = await AllMovies();

			setMoviesData(res.Search);
			// console.log(res.data.Search);
		} catch (error) {
			console.error("Error fetching Movies data:", error);
		}
	};

	// Call All Movies when the All Movies component mounts
	useEffect(() => {
		fetchMoviesData();
	}, []);

	return (
		<div className="flex flex-wrap justify-center px-2">
			{moviesData.map((upc) => (
				<Moviecard key={upc.id} movie={upc} />
			))}
		</div>
	);
};

export default Movies;
