import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Board } from '../../components';

const BoardContainer = ({
	enableSettings,
	width,
	height
}) => {
	const onRightClickBoard = useCallback((e) => {
		e.preventDefault();
	}, []);

	return (
		<>
			{!enableSettings &&
			<Board
				width={width}
				height={height}
				onRightClickBoard={onRightClickBoard}
			/>}
		</>
	);
};

const mapStateToProps = (rootState) => ({
	enableSettings: rootState.control.enableSettings,
	gameState: rootState.control.gameState,
	width: rootState.control.width,
	height: rootState.control.height
});

export default connect(
	mapStateToProps,
	null
)(BoardContainer);