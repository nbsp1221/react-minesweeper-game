import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import CellContainer from './Cell';
import { Board } from '../../components';

const BoardContainer = ({
	width,
	height,
	inGame
}) => {
	const [points, setPoints] = useState([]);

	useEffect(() => {
		if (inGame) {
			const makedPoints = Array(width * height).fill().map((v, i) => ({
				x: i % width,
				y: Math.floor(i / width)
			}));
			setPoints(makedPoints);
		}
	}, [inGame]);

	const onRightClickBoard = useCallback((e) => {
		e.preventDefault();
	}, []);

	return (
		<>
			{inGame && <Board
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
	width: rootState.control.width,
	height: rootState.control.height,
	inGame: rootState.control.inGame
});

export default connect(
	mapStateToProps,
	null
)(BoardContainer);