import { store } from '../../store/store';
import { checkForWinner } from '../../utils';
import styles from './square.module.css';
import PropTypes from 'prop-types';

export const SquareLayout = ({ index }) => {
	const handleClickSquare = () => {
		if (!store.getState().moves[index] && !checkForWinner(store.getState().moves)) {
			const [...elemMoves] = store.getState().moves;
			store.getState().moveIsX
				? (elemMoves[index] = 'X')
				: (elemMoves[index] = '0');

			store.dispatch({ type: 'CHANGE_MOVE_X', payload: store.getState().moveIsX });
			store.dispatch({ type: 'CHANGE_MOVES', payload: elemMoves });
		}
	};

	return (
		<div className={styles.item} onClick={handleClickSquare}>
			<span className={styles.text}>
				{store.getState().moves[index] ? store.getState().moves[index] : null}
			</span>
		</div>
	);
};

SquareLayout.propTypes = {
	index: PropTypes.number,
};
