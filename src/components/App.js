import React from 'react';

import CommentBox from 'components/CommentBox';
import CommentList from './CommentList';


export default () => {
	return(
		<div>
			<CommentBox />
			<CommentList />
		</div>
	);
}