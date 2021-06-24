import { combineReducers } from 'redux';
import photosReducer from './photosReducer';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
	users: usersReducer,
	photos: photosReducer,
	posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
