import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { getCellText } from '../../lib/minesweeper';
import { rightClickCell } from '../../store/modules/control';
import { Cell } from '../../components';

const CellContainer = ({
	boardData,
	rightClickCell,
	x,
	y
}) => {
	const onRightClickCell = useCallback((e) => {
		e.preventDefault();
		rightClickCell(x, y, boardData[y][x]);
	}, [boardData[y][x]]);

	return (
		<Cell
			onContextMenu={onRightClickCell}
		>{getCellText(boardData[y][x])}</Cell>
	);
};

const mapStateToProps = (rootState) => ({
	boardData: rootState.control.boardData
});

const mapDispatchToProps = (dispatch) => ({
	rightClickCell: (x, y, code) => dispatch(rightClickCell(x, y, code))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CellContainer);