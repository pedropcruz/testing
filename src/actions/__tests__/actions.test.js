import { saveComment } from "actions";
import { SAVE_COMMENTS } from 'actions/types';

describe('saveComment', ()=>{
	it('has the correct type', ()=>{
		const action = saveComment();

		expect(action.type).toEqual(SAVE_COMMENTS);
	});

	it('has the correct payload', ()=>{
		const action = saveComment('New Comment');

		expect(action.payload).toEqual('New Comment');
	});
});


describe('fetchComment', ()=>{
	it('has the correct type', ()=>{

	});

	it('has the correct payload', ()=>{

	});
});