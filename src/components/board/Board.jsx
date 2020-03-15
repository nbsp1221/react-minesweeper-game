import React from 'react';
import { CellContainer } from '../../containers';
import {
	Wrapper
} from './BoardStyle';

const Board = ({
	width,
	height,
	onRightClickBoard
}) => {
	return (
		<Wrapper widthSize={width} onContextMenu={onRightClickBoard}>
			{Array(width * height).fill().map((v, i) => 
				<CellContainer key={i} x={i % width} y={Math.floor(i / width)} />
			)}
		</Wrapper>
	);
};

export default Board;