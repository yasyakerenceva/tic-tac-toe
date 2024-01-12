import { useDispatch, useSelector } from 'react-redux';
import { checkForWinner, getInformation, isArrayAllZeros } from '../../utils';
import styles from './header.module.css';
import { selectMoveIsX, selectMoves } from '../../store/selectors';

export const HeaderLayout = () => {
	const moves = useSelector(selectMoves);
	const moveIsX = useSelector(selectMoveIsX);
	const dispatch = useDispatch();

	const flagAllZeros = moves.every(isArrayAllZeros);
	const handleClickClearField = () => {
		dispatch({ type: 'CLEAR_MOVES', payload: Array(9).fill(0) });
		dispatch({ type: 'CLEAR_MOVE_X', payload: true });
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.info}>
				{getInformation(moves, moveIsX, checkForWinner(moves))}
			</div>
			<button
				className={`${styles.btn} ${flagAllZeros ? styles.btnDefault : ''}`}
				onClick={handleClickClearField}
			>
				Начать заново
			</button>
		</div>
	);
};
