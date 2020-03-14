import React from 'react';
import { connect } from 'react-redux';
import { getCellText } from '../../lib/functions';
import { Cell } from '../../components';

const CellContainer = ({
	boardData,
	x,
	y
}) => {
	return (
		<Cell>{getCellText(boardData[y][x])}</Cell>
	);
};

const mapStateToProps = (rootState) => ({
	boardData: rootState.control.boardData
});

const mapDispatchToProps = (dispatch) => ({
	
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CellContainer);