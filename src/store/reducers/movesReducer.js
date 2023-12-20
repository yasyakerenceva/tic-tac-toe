import { COUNT_SQUARE } from '../../utils';

export const initialStateMoves = Array(COUNT_SQUARE).fill(0);

export const movesReducer = (state = initialStateMoves, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'CLEAR_MOVES':
			return payload;
		case 'CHANGE_MOVES':
			return payload;
		default:
			return state;
	}
};
