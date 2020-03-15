import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { getCellText } from '../../lib/minesweeper';
import { openCell, rotateCellState } from '../../store/modules/control';
import { Cell } from '../../components';

const CellContainer = ({
	boardData,
	openCell,
	rotateCellState,
	x,
	y
}) => {
	const onClickCell = useCallback(() => {
		openCell(x, y);
	}, []);

	const onRightClickCell = useCallback((e) => {
		e.preventDefault();
		rotateCellState(x, y);
	}, []);

	return (
		<Cell
			code={boardData[y][x]}
			onClick={onClickCell}
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
	openCell: (x, y) => dispatch(openCell(x, y)),
	rotateCellState: (x, y) => dispatch(rotateCellState(x, y))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CellContainer);