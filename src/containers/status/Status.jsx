import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateElapsedTime } from '../../store/modules/control';

const StatusContainer = ({
	gameState,
	enableTimer,
	elapsedTime,
	mineCount,
	flagCount,
	updateElapsedTime
}) => {
	useEffect(() => {
		let gameTimer;

		if (enableTimer) {
			gameTimer = setInterval(() => {
				updateElapsedTime();
			}, 1000);
		}

		return () => {
			clearInterval(gameTimer);
		};
	}, [enableTimer]);

	return (
		<>
			{gameState !== 'init' &&
			<div>
				<div>Left mines: {mineCount - flagCount} / {mineCount}</div>
				<div>Timer: {elapsedTime}</div>
				<div>Result: {gameState}</div>
			</div>}
		</>
	);
};

const mapStateToProps = (rootState) => ({
	gameState: rootState.control.gameState,
	enableTimer: rootState.control.enableTimer,
	elapsedTime: rootState.control.elapsedTime,
	mineCount: rootState.control.mineCount,
	flagCount: rootState.control.flagCount
});

const mapDispatchToProps = (dispatch) => ({
	updateElapsedTime: () => dispatch(updateElapsedTime())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StatusContainer);