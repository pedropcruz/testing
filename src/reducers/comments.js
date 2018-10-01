import { SAVE_COMMENTS } from "actions/types";

export default function (state = [], action) {
	switch (action.type) {
		case SAVE_COMMENTS:
			return [...state, action.payload];
		default:
			return state;
	}
}