import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import CellContainer from './Cell';
import { Board } from '../../components';

const BoardContainer = ({
	gameState,
	width,
	height
}) => {
	const [points, setPoints] = useState([]);

	useEffect(() => {
		if (gameState === 'start') {
			const makedPoints = Array(width * height).fill().map((v, i) => ({
				x: i % width,
				y: Math.floor(i / width)
			}));
			setPoints(makedPoints);
		}
	}, [gameState]);

	const onRightClickBoard = useCallback((e) => {
		e.preventDefault();
	}, []);

	return (
		<>
			{gameState === 'start' && <Board
				widthCount={width}
				onContextMenu={onRightClickBoard}
			>
				{points.map((v, i) => (
					<CellContainer
						key={i}
						x={v.x}
						y={v.y}
					/>
				))}
			</Board>}
		</>
	);
};

const mapStateToProps = (rootState) => ({
	gameState: rootState.control.gameState,
	width: rootState.control.width,
	height: rootState.control.height
});

export default connect(
	mapStateToProps,
	null
)(BoardContainer);