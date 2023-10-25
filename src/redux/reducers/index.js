import { combineReducers } from "redux";
import handleRating from "./handleRating";
import handleQueue from "./handleQueue";

const rootReducer = combineReducers({
	handleRating: handleRating,
	handleQueue: handleQueue,
});

export default rootReducer;
