import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { updateElapsedTime } from '../../store/modules/control';
import { Status } from '../../components';

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

	const getResultEmoji = useCallback((gameState) => {
		switch (gameState) {
			case 'win':
				return '😎';
			case 'lose':
				return '😢';
			default:
				return '😄';
		}
	}, [gameState])

	return (
		<>
			{gameState !== 'init' &&
			<Status
				leftMineCount={mineCount - flagCount}
				mineCount={mineCount}
				resultEmoji={getResultEmoji(gameState)}
				elapsedTime={elapsedTime.toString().padStart(3, '0')}
			/>}
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