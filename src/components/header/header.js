import { isArrayAllZeros } from '../../utils';
import styles from './header.module.css';
import PropTypes from 'prop-types';

export const HeaderLayout = ({ moves, message, handleClickClearField }) => {
	const flagAllZeros = moves.every(isArrayAllZeros);

	return (
		<div className={styles.wrapper}>
			<div className={styles.info}>{message}</div>
			<button
				className={`${styles.btn} ${flagAllZeros ? styles.btnDefault : ''}`}
				onClick={handleClickClearField}
			>
				Начать заново
			</button>
		</div>
	);
};

HeaderLayout.propTypes = {
	moves: PropTypes.array,
	message: PropTypes.string,
	handleClickClearField: PropTypes.func,
};
