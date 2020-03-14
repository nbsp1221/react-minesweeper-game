import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { MIN_WIDTH, MIN_HEIGHT, MIN_MINES } from '../../store/constants';
import { startGame } from '../../store/modules/control';
import { Settings } from '../../components';

const SettingsContainer = ({
	startGame
}) => {
	const [width, setWidth] = useState(MIN_WIDTH);
	const [height, setHeight] = useState(MIN_HEIGHT);
	const [mines, setMines] = useState(MIN_MINES);

	useEffect(() => {
		const maxMines = (width - 1) * (height - 1);
		mines > maxMines && setMines(maxMines);
	}, [width, height])

	const onSliderChangeWidth = useCallback((e) => {
		setWidth(parseInt(e.target.value));
	}, []);

	const onSliderChangeHeight = useCallback((e) => {
		setHeight(parseInt(e.target.value));
	}, []);

	const onSliderChangeMines = useCallback((e) => {
		setMines(parseInt(e.target.value));
	}, []);

	const onClickStart = useCallback(() => {
		startGame(width, height, mines);
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

const mapStateToProps = (rootState) => ({

});

const mapDispatchToProps = (dispatch) => ({
	startGame: (width, height, mines) => dispatch(startGame(width, height, mines))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingsContainer);