import { combineReducers } from "redux";
import handleRating from "./handleRating";

const rootReducer = combineReducers({
	handleRating: handleRating,
});

export default rootReducer;
