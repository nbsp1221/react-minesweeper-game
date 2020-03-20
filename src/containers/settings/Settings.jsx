import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MIN_WIDTH, MIN_HEIGHT, MIN_MINES } from '../../constants';
import { hideSettings, setGame, restartGame } from '../../store/modules/control';
import { Settings } from '../../components';

const SettingsContainer = () => {
	const dispatch = useDispatch();
	const enableSettings = useSelector(rootState => rootState.control.enableSettings);

	const [width, setWidth] = useState(MIN_WIDTH);
	const [height, setHeight] = useState(MIN_HEIGHT);
	const [mineCount, setMineCount] = useState(MIN_MINES);

	useEffect(() => {
		const maxMineCount = (width - 1) * (height - 1);

		if (mineCount > maxMineCount) {
			setMineCount(maxMineCount)
		}
	}, [width, height, mineCount]);

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
		dispatch(setGame(width, height, mineCount));
		dispatch(restartGame());
		dispatch(hideSettings());
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

export default SettingsContainer;