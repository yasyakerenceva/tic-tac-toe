import { combineReducers } from 'redux';
import { movesReducer } from './movesReducer';
import { moveIsXReducer } from './moveIsXReducer';

export const rootReducer = combineReducers({
	moves: movesReducer,
	moveIsX: moveIsXReducer,
});
