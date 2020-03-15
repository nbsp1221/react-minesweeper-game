import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { showSettings, restartGame, updateElapsedTime } from '../../store/modules/control';
import { Status } from '../../components';

const StatusContainer = ({
	enableSettings,
	gameState,
	enableTimer,
	elapsedTime,
	mineCount,
	flagCount,
	showSettings,
	restartGame,
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
	}, [gameState]);

	const onClickRestart = useCallback(() => {
		restartGame();
	}, []);

	const onClickSettings = useCallback(() => {
		showSettings();
	}, []);

	return (
		<>
			{!enableSettings &&
			<Status
				leftMineCount={mineCount - flagCount}
				mineCount={mineCount}
				resultEmoji={getResultEmoji(gameState)}
				enableSettings={gameState !== 'run'}
				elapsedTime={elapsedTime.toString().padStart(3, '0')}
				onClickRestart={onClickRestart}
				onClickSettings={onClickSettings}
			/>}
		</>
	);
};

const mapStateToProps = (rootState) => ({
	enableSettings: rootState.control.enableSettings,
	gameState: rootState.control.gameState,
	enableTimer: rootState.control.enableTimer,
	elapsedTime: rootState.control.elapsedTime,
	mineCount: rootState.control.mineCount,
	flagCount: rootState.control.flagCount
});

const mapDispatchToProps = (dispatch) => ({
	showSettings: () => dispatch(showSettings()),
	restartGame: () => dispatch(restartGame()),
	updateElapsedTime: () => dispatch(updateElapsedTime())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StatusContainer);