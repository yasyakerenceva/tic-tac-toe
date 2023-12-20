import { store } from './store/store';

export const COUNT_SQUARE = 9;

export const isArrayFilled = (element) => {
	return Boolean(element) === true;
};

export const isArrayAllZeros = (element) => {
	return element === 0;
};

export const checkForWinner = (moves) => {
	const victoryOptions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < victoryOptions.length; i++) {
		const [a, b, c] = victoryOptions[i];
		if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
			return moves[a];
		}
	}
	return false;
};

export const getInformation = (winner, message = '') => {
	if (winner) {
		message = `Победил игрок: ${winner}`;
	} else if (store.getState().moves.every(isArrayFilled)) {
		message = 'Ничья';
	} else {
		message = `Ход игрока: ${store.getState().moveIsX ? 'X' : '0'}`;
	}
	return message;
};
