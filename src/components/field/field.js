import styles from './field.module.css';
import { COUNT_SQUARE } from '../../utils';
import { SquareLayout } from '../square/square';

const indexArray = Array.from(Array(COUNT_SQUARE).keys());

export const FieldLayout = () => {
	return (
		<div className={styles.wrapper}>
			{indexArray.map((index) => (
				<SquareLayout key={index} index={index} />
			))}
		</div>
	);
};
