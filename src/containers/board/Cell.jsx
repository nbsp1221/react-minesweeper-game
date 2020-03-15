import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import { CODES } from '../../store/constants';
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
	const getCellText = useCallback((code) => {
		switch (code) {
			case CODES.OPENED:
			case CODES.NOTHING:
				return '';
			case CODES.FLAG:
			case CODES.MINE_FLAG:
				return gameState === 'win' ? '💣' : '🚩';
			case CODES.QUESTION:
			case CODES.MINE_QUESTION:
				return gameState === 'win' ? '💣' : '❔';
			case CODES.MINE:
				return gameState === 'win' ? '💣' : (gameState === 'lose' ? '💥' : '');
			default:
				return code;
		}
	}, [gameState]);

	const onClickCell = useCallback(() => {
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