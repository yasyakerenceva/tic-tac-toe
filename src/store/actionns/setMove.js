export const setMove = (index) => {
    return (dispatch, getState) => {
        const { moves, moveIsX } = getState();
        const [...elemMoves] = moves;

        moveIsX ? (elemMoves[index] = 'X') : (elemMoves[index] = '0');

        dispatch({ type: 'CHANGE_MOVE_X', payload: moveIsX });
        dispatch({ type: 'CHANGE_MOVES', payload: elemMoves });
    }
}