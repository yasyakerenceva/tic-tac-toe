import { connect } from 'react-redux';
import { checkForWinner } from '../../utils';
import { setMove } from '../../store/actionns';
import { Component } from 'react';

class SquareContainer extends Component {
	handleClickSquare = () => {
		if (!this.props.moves[this.props.index] && !checkForWinner(this.props.moves)) {
			this.props.setMove(this.props.index);
		}
	}

	render() {
		return (
			<div
				className="
					flex justify-center items-center
					border-[3px] border-solid border-[#FA8072]
					w-[100px] h-[100px]
					transition duration-[0.3s] cursor-pointer
					hover:bg-[#DDDBDB]"
				onClick={this.handleClickSquare}>
				<span className="text-[40px] font-black text-[#FA8072]">
					{this.props.moves[this.props.index] ? this.props.moves[this.props.index] : null}
				</span>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	moves: state.moves
});
const mapDispatchToProps = (dispatch) => ({
	setMove: (indexMove) => dispatch(setMove(indexMove))
});

export const SquareLayout = connect(mapStateToProps, mapDispatchToProps)(SquareContainer);
