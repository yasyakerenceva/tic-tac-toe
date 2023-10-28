import styles from './App.module.css';
import { FieldLayout, HeaderLayout } from './components';
import { useState } from 'react';
import { COUNT_SQUARE, checkForWinner, isArrayFilled } from './utils';

export const App = () => {
	const [moveIsX, setMoveIsX] = useState(true);
	const [moves, setMoves] = useState(Array(COUNT_SQUARE).fill(0));

	const getInformation = (winner, message = '') => {
		if (winner) {
			message = `Победил игрок: ${winner}`;
		} else if (moves.every(isArrayFilled)) {
			message = 'Ничья';
		} else {
			message = `Ход игрока: ${moveIsX ? 'X' : '0'}`;
		}

		return message;
	};

	const handleClickClearField = () => {
		setMoves(Array(9).fill(0));
		setMoveIsX(true);
	};

	return (
		<div className={styles.game}>
			<div className={styles.header}>
				<HeaderLayout
					moves={moves}
					message={getInformation(checkForWinner(moves))}
					handleClickClearField={handleClickClearField}
				/>
			</div>
			<div className={styles.field}>
				<FieldLayout
					moves={moves}
					setMoves={setMoves}
					moveIsX={moveIsX}
					setMoveIsX={setMoveIsX}
				/>
			</div>
		</div>
	);
};
