import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { getCellText } from '../../lib/minesweeper';
import { rotateCellState } from '../../store/modules/control';
import { Cell } from '../../components';

const CellContainer = ({
	boardData,
	rotateCellState,
	x,
	y
}) => {
	const onRightClickCell = useCallback((e) => {
		e.preventDefault();
		rotateCellState(x, y, boardData[y][x]);
	}, [boardData[y][x]]);

	return (
		<Cell
			onContextMenu={onRightClickCell}
		>
			{getCellText(boardData[y][x])}
		</Cell>
	);
};

const mapStateToProps = (rootState) => ({
	boardData: rootState.control.boardData
});

const mapDispatchToProps = (dispatch) => ({
	rotateCellState: (x, y, code) => dispatch(rotateCellState(x, y, code))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CellContainer);