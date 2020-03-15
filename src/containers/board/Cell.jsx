import React, { useMemo, useCallback } from 'react';
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

	return useMemo(() => (
		<Cell
			cellCode={boardData[y][x]}
			cellText={getCellText(boardData[y][x])}
			onClickCell={onClickCell}
			onRightClickCell={onRightClickCell}
		/>
	), [boardData[y][x]])
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