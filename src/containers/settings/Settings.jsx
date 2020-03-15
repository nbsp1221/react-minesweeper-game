import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { MIN_WIDTH, MIN_HEIGHT, MIN_MINES } from '../../store/constants';
import { startGame } from '../../store/modules/control';
import { Settings } from '../../components';

const SettingsContainer = ({
	gameState,
	startGame
}) => {
	const [width, setWidth] = useState(MIN_WIDTH);
	const [height, setHeight] = useState(MIN_HEIGHT);
	const [mineCount, setMineCount] = useState(MIN_MINES);

	useEffect(() => {
		const maxMineCount = (width - 1) * (height - 1);
		mineCount > maxMineCount && setMineCount(maxMineCount);
	}, [width, height]);

	const onChangeWidth = useCallback((e) => {
		setWidth(parseInt(e.target.value));
	}, []);

	const onChangeHeight = useCallback((e) => {
		setHeight(parseInt(e.target.value));
	}, []);

	const onChangeMines = useCallback((e) => {
		setMineCount(parseInt(e.target.value));
	}, []);

	const onClickStart = useCallback(() => {
		startGame(width, height, mineCount);
	}, [width, height, mineCount]);

	return (
		<>
			{gameState === 'init' && <Settings
				width={width}
				height={height}
				mineCount={mineCount}
				maxMineCount={(width - 1) * (height - 1)}
				onChangeWidth={onChangeWidth}
				onChangeHeight={onChangeHeight}
				onChangeMines={onChangeMines}
				onClickStart={onClickStart}
			/>}
		</>
	);
};

const mapStateToProps = (rootState) => ({
	gameState: rootState.control.gameState
});

const mapDispatchToProps = (dispatch) => ({
	startGame: (width, height, mineCount) => dispatch(startGame(width, height, mineCount))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingsContainer);