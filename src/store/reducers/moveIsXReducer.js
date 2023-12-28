export const initialStateMoveIsX = true;

export const moveIsXReducer = (state = initialStateMoveIsX, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'CLEAR_MOVE_X':
			return payload;
		case 'CHANGE_MOVE_X':
			return !payload;
		default:
			return state;
	}
};
