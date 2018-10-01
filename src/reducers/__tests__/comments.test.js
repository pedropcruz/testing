import commentsReducer from 'reducers/comments';
import { SAVE_COMMENTS } from 'actions/types';

it('handle actions of type SAVE_COMMENTS', () => {
	const action = {
		type: SAVE_COMMENTS,
		payload: 'New Comment'
	};

	const newState = commentsReducer([], action);

	expect(newState).toEqual(['New Comment']);
});

it('handle action with unkown type', () => {
	const newState = commentsReducer([], {});
	expect(newState).toEqual([]);
});