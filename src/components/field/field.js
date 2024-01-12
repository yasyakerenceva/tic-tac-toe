import { COUNT_SQUARE } from '../../utils';
import { SquareLayout } from '../square/square';
import { Component } from 'react';

const indexArray = Array.from(Array(COUNT_SQUARE).keys());

export class FieldLayout extends Component {
	render() {
		return (
			<div className="w-full grid grid-cols-3 gap-[10px]">
				{indexArray.map((index) => (
					<SquareLayout key={index} index={index} />
				))}
			</div>
		)
	}
}
