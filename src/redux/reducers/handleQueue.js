const initialState = {
	queue: [],
};

const handleQueue = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TO_QUEUE":
			return {
				...state,
				queue: [...state.queue, action.movie],
			};
		default:
			return state;
	}
};

export default handleQueue;
