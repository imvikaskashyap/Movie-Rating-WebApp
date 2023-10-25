import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incRating, decRating } from "../redux/actions/index";
import Btn from "./Btn";

function Moviecard({ movie }) {
	const dispatch = useDispatch();
	const rating = useSelector((state) => state.handleRating);
	console.log(rating);

	// Create an array to represent stars
	const stars = Array(5).fill(0);

	return (
		<>
			<div className="w-full text-white max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<a href="#" className="m-auto">
					<img
						className="p-4 rounded-t-lg m-auto movie-poster"
						src={movie.Poster || noimage}
						alt="Movie poster"
					/>
				</a>
				<div className="px-5 pb-5">
					<h5 className="text-xl font-semibold tracking-tight text-white dark-text-white">
						{movie.Title}
					</h5>
					<div className="flex items-center mt-2.5 mb-5 justify-between">
						<div className="flex items-center justify-between">
							<button
								className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
								onClick={() => {
									dispatch(decRating());
								}}>
								{" "}
								-{" "}
							</button>
							{stars.map((_, index) => (
								<span
									key={index}
									className={`text-2xl m-2 ${
										index < rating
											? "text-yellow-300"
											: "text-gray-200 dark-text-gray-600"
									}`}>
									{index < rating ? "★" : "☆"}{" "}
									{/* ★ is a filled star, ☆ is an empty star */}
								</span>
							))}
							<button
								className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
								onClick={() => {
									dispatch(incRating());
								}}>
								+
							</button>
						</div>
						<span className="bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark-bg-blue-200 dark-text-blue-800 ml-3">
							{rating}
						</span>
					</div>
					<div className="flex items-center justify-between">
						<span className="text-3xl font-bold dark-text-white">
							Year: {movie.Year}
						</span>
						<Btn />
					</div>
				</div>
			</div>
		</>
	);
}

export default Moviecard;
