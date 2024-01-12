import { connect } from 'react-redux';
import { checkForWinner, getInformation, isArrayAllZeros } from '../../utils';
import { Component } from 'react';

class HeaderContainer extends Component {
	handleClickClearField = () => {
		this.props.clearMoves();
		this.props.clearMoveX();
	}

	render() {
		return (
			<div className="w-full flex justify-between items-center">
				<div className="text-[18px] font-medium text-[#FA8072]">
					{getInformation(this.props.moves, this.props.moveIsX, checkForWinner(this.props.moves))}
				</div>
				<button
					className={`
						w-[150px]
						h-[50px]
						text-[16px]
						text-[#FA8072]
						border-none
						outline-none
						cursor-pointer
						bg-[#DDDBDB]
						transition-[all]
						duration-[0.3s]
						hover:bg-[#dddbdbb3]
						${this.props.moves.every(isArrayAllZeros)
							? 'cursor-default bg-[#dddbdb4d] hover:bg-[#dddbdb4d]'
							: ''}`}
					onClick={this.handleClickClearField}
				>
					Начать заново
				</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	moves: state.moves,
	moveIsX: state.moveIsX
});

const mapDispatchToProps = (dispatch) => ({
	clearMoves: () => dispatch({ type: 'CLEAR_MOVES', payload: Array(9).fill(0) }),
	clearMoveX: () => dispatch({ type: 'CLEAR_MOVE_X', payload: true })
});

export const HeaderLayout = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
