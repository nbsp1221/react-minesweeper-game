import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GAME } from '../../constants';
import { showSettings, restartGame, updateElapsedTime } from '../../store/modules/control';
import { Status } from '../../components';

const StatusContainer = () => {
	const dispatch = useDispatch();
	const enableSettings = useSelector(rootState => rootState.control.enableSettings);
	const gameState = useSelector(rootState => rootState.control.gameState);
	const enableTimer = useSelector(rootState => rootState.control.enableTimer);
	const elapsedTime = useSelector(rootState => rootState.control.elapsedTime);
	const mineCount = useSelector(rootState => rootState.control.mineCount);
	const flagCount = useSelector(rootState => rootState.control.flagCount);

	useEffect(() => {
		let gameTimer;

		if (enableTimer) {
			gameTimer = setInterval(() => {
				dispatch(updateElapsedTime());
			}, 1000);
		}

		return () => {
			clearInterval(gameTimer);
		};
	}, [enableTimer]);

	const getResultEmoji = useCallback((gameState) => {
		switch (gameState) {
			case GAME.WIN:
				return '😎';
			case GAME.LOSE:
				return '😢';
			default:
				return '😄';
		}
	}, [gameState]);

	const onClickRestart = useCallback(() => {
		dispatch(restartGame());
	}, []);

	const onClickSettings = useCallback(() => {
		dispatch(showSettings());
	}, []);

	return (
		<>
			{!enableSettings &&
			<Status
				leftMineCount={mineCount - flagCount}
				mineCount={mineCount}
				resultEmoji={getResultEmoji(gameState)}
				enableSettings={gameState !== GAME.RUN}
				elapsedTime={elapsedTime.toString().padStart(3, '0')}
				onClickRestart={onClickRestart}
				onClickSettings={onClickSettings}
			/>}
		</>
	);
};

export default StatusContainer;