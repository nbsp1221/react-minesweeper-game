import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import { getCellText } from '../../lib/minesweeper';
import { openCell, rotateCellState } from '../../store/modules/control';
import { Cell } from '../../components';

const CellContainer = ({
	gameState,
	boardData,
	openCell,
	rotateCellState,
	x,
	y
}) => {
	const onClickCell = useCallback(() => {
		console.log(gameState);
		(gameState === 'ready' || gameState === 'run') && openCell(x, y);
	}, [gameState]);

	const onRightClickCell = useCallback((e) => {
		e.preventDefault();
		(gameState === 'ready' || gameState === 'run') && rotateCellState(x, y);
	}, [gameState]);

	return useMemo(() => (
		<Cell
			cellCode={boardData[y][x]}
			cellText={getCellText(boardData[y][x])}
			onClickCell={onClickCell}
			onRightClickCell={onRightClickCell}
		/>
	), [gameState, boardData[y][x]])
};

const mapStateToProps = (rootState) => ({
	gameState: rootState.control.gameState,
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