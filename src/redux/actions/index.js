// For increasing the rating
export const incRating = (movie) => {
	return {
		type: "INCREMENT",
		movie: {
			...movie,
			rating: Math.min(movie.rating + 1, 5), // Ensure rating does not exceed 5
		},
	};
};

// For decreasing the rating
export const decRating = (movie) => {
	return {
		type: "DECREMENT",
		movie: {
			...movie,
			rating: Math.max(movie.rating - 1, 0), // Ensure rating does not go below 0
		},
	};
};

export const addToQueue = (movie) => {
	return {
		type: "ADD_TO_QUEUE",
		movie,
	};
};
