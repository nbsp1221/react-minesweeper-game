import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CellContainer from './Cell';

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

	return (
		<div>
			{inGame && points.map((v, i) => (
				<CellContainer key={i} x={v.x} y={v.y} />
			))}
		</div>
	);
};

const mapStateToProps = (rootState) => ({
	width: rootState.control.width,
	height: rootState.control.height,
	inGame: rootState.control.inGame
});

const mapDispatchToProps = (dispatch) => ({
	
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BoardContainer);