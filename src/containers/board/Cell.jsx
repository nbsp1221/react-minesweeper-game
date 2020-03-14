import React from 'react';
import { connect } from 'react-redux';

const CellContainer = ({
	boardData,
	x,
	y
}) => {
	return (
		<div>{boardData[y][x]}</div>
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