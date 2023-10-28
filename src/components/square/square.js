import { checkForWinner } from '../../utils';
import styles from './square.module.css';
import PropTypes from 'prop-types';

export const SquareLayout = ({ index, moves, setMoves, moveIsX, setMoveIsX }) => {
	const handleClickSquare = () => {
		if (!moves[index] && !checkForWinner(moves)) {
			moveIsX ? (moves[index] = 'X') : (moves[index] = '0');

			setMoveIsX(!moveIsX);
			setMoves(moves);
		}
	};

	return (
		<div className={styles.item} onClick={handleClickSquare}>
			<span className={styles.text}>{moves[index] ? moves[index] : null}</span>
		</div>
	);
};

SquareLayout.propTypes = {
	index: PropTypes.number,
	moves: PropTypes.array,
	setMoves: PropTypes.func,
	moveIsX: PropTypes.bool,
	setMoveIsX: PropTypes.func,
};
