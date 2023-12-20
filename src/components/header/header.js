import { store } from '../../store/store';
import { checkForWinner, getInformation, isArrayAllZeros } from '../../utils';
import styles from './header.module.css';

export const HeaderLayout = () => {
	const flagAllZeros = store.getState().moves.every(isArrayAllZeros);
	const handleClickClearField = () => {
		store.dispatch({ type: 'CLEAR_MOVES', payload: Array(9).fill(0) });
		store.dispatch({ type: 'CLEAR_MOVE_X', payload: true });
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.info}>
				{getInformation(checkForWinner(store.getState().moves))}
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
