import React, { useState, useCallback, useEffect } from 'react';
import { MIN_WIDTH, MIN_HEIGHT, MIN_MINES } from '../../store/constants';
import { Settings } from '../../components';

const SettingsContainer = () => {
	const [width, setWidth] = useState(MIN_WIDTH);
	const [height, setHeight] = useState(MIN_HEIGHT);
	const [mines, setMines] = useState(MIN_MINES);

	useEffect(() => {
		const maxMines = (width - 1) * (height - 1);
		mines > maxMines && setMines(maxMines);
	}, [width, height])

	const onSliderChangeWidth = useCallback((e) => {
		setWidth(e.target.value);
	}, []);

	const onSliderChangeHeight = useCallback((e) => {
		setHeight(e.target.value);
	}, []);

	const onSliderChangeMines = useCallback((e) => {
		setMines(e.target.value);
	}, []);

	const onClickStart = useCallback(() => {
		console.log('Start');
	}, []);

	return (
		<Settings
			width={width}
			height={height}
			mines={mines}
			maxMines={(width - 1) * (height - 1)}
			onSliderChangeWidth={onSliderChangeWidth}
			onSliderChangeHeight={onSliderChangeHeight}
			onSliderChangeMines={onSliderChangeMines}
			onClickStart={onClickStart}
		/>
	);
};

export default SettingsContainer;