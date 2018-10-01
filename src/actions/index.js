import { SAVE_COMMENTS } from 'actions/types';

export function saveComment(comment){
	return {
		type: SAVE_COMMENTS,
		payload: comment
	}
}