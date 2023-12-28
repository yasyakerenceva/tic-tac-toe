import { useDispatch, useSelector } from 'react-redux';
import { checkForWinner } from '../../utils';
import styles from './square.module.css';
import PropTypes from 'prop-types';
import { selectMoves, selectMoveIsX } from '../../store/selectors';

export const SquareLayout = ({ index }) => {
	const moves = useSelector(selectMoves);
	const moveIsX = useSelector(selectMoveIsX);
	const dispatch = useDispatch();

	const handleClickSquare = () => {
		if (!moves[index] && !checkForWinner(moves)) {
			const [...elemMoves] = moves;
			moveIsX ? (elemMoves[index] = 'X') : (elemMoves[index] = '0');

			dispatch({ type: 'CHANGE_MOVE_X', payload: moveIsX });
			dispatch({ type: 'CHANGE_MOVES', payload: elemMoves });
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
};
