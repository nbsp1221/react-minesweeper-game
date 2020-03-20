import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Board } from '../../components';

const BoardContainer = () => {
	const enableSettings = useSelector(rootState => rootState.control.enableSettings);
	const width = useSelector(rootState => rootState.control.width);
	const height = useSelector(rootState => rootState.control.height);

	const onRightClickBoard = useCallback((e) => {
		e.preventDefault();
	}, []);

	return (
		<>
			{!enableSettings &&
			<Board
				width={width}
				height={height}
				onRightClickBoard={onRightClickBoard}
			/>}
		</>
	);
};

export default BoardContainer;