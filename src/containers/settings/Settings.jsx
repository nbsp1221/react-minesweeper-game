import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { MIN_WIDTH, MIN_HEIGHT, MIN_MINES } from '../../store/constants';
import { hideSettings, setGame, restartGame } from '../../store/modules/control';
import { Settings } from '../../components';

const SettingsContainer = ({
	enableSettings,
	hideSettings,
	setGame,
	restartGame
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

	const onClickSet = useCallback(() => {
		setGame(width, height, mineCount);
		restartGame();
		hideSettings();
	}, [width, height, mineCount]);

	return (
		<>
			{enableSettings &&
			<Settings
				width={width}
				height={height}
				mineCount={mineCount}
				maxMineCount={(width - 1) * (height - 1)}
				onChangeWidth={onChangeWidth}
				onChangeHeight={onChangeHeight}
				onChangeMines={onChangeMines}
				onClickSet={onClickSet}
			/>}
		</>
	);
};

const mapStateToProps = (rootState) => ({
	enableSettings: rootState.control.enableSettings
});

const mapDispatchToProps = (dispatch) => ({
	hideSettings: () => dispatch(hideSettings()),
	setGame: (width, height, mineCount) => dispatch(setGame(width, height, mineCount)),
	restartGame: () => dispatch(restartGame())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingsContainer);