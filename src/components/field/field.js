import styles from './field.module.css';
import PropTypes from 'prop-types';
import { COUNT_SQUARE } from '../../utils';
import { SquareLayout } from '../square/square';

const indexArray = Array.from(Array(COUNT_SQUARE).keys());

export const FieldLayout = ({ moves, setMoves, moveIsX, setMoveIsX }) => {
	return (
		<div className={styles.wrapper}>
			{indexArray.map((index) => (
				<SquareLayout
					key={index}
					index={index}
					moves={moves}
					setMoves={setMoves}
					moveIsX={moveIsX}
					setMoveIsX={setMoveIsX}
				/>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	moves: PropTypes.array,
	setMoves: PropTypes.func,
	moveIsX: PropTypes.bool,
	setMoveIsX: PropTypes.func,
};
