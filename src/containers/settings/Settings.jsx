import React, { useState, useCallback } from 'react';
import { Settings } from '../../components';

const SettingsContainer = () => {
	const [width, setWidth] = useState(9);
	const [height, setHeight] = useState(9);
	const [mines, setMines] = useState(10);

	const onSliderChangeWidth = useCallback((e) => {
		setWidth(e.target.value);
	}, []);

	const onSliderChangeHeight = useCallback((e) => {
		setHeight(e.target.value);
	}, []);

	const onSliderChangeMines = useCallback((e) => {
		setMines(e.target.value);
	}, []);

	const onClickStart = () => {
		console.log('Start');
	};

	return (
		<Settings
			width={width}
			height={height}
			mines={mines}
			onSliderChangeWidth={onSliderChangeWidth}
			onSliderChangeHeight={onSliderChangeHeight}
			onSliderChangeMines={onSliderChangeMines}
			onClickStart={onClickStart}
		/>
	);
};

export default SettingsContainer;