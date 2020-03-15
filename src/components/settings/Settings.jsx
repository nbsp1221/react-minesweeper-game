import React from 'react';
import { MIN_WIDTH, MAX_WIDTH, MIN_HEIGHT, MAX_HEIGHT, MIN_MINES } from '../../store/constants';
import { Block, Slider, Button } from '../common';

const Settings = ({
	width,
	height,
	mineCount,
	maxMineCount,
	onChangeWidth,
	onChangeHeight,
	onChangeMines,
	onClickStart
}) => {
	return (
		<Block mt='30px' textAlign='left'>
			<Block mb='20px'>
				<Block mb='5px'>Width: {width}</Block>
				<Slider min={MIN_WIDTH} max={MAX_WIDTH} value={width} onChange={onChangeWidth} />
			</Block>
			<Block mb='20px'>
				<Block mb='5px'>Height: {height}</Block>
				<Slider min={MIN_HEIGHT} max={MAX_HEIGHT} value={height} onChange={onChangeHeight} />
			</Block>
			<Block mb='30px'>
				<Block mb='5px'>Mines: {mineCount}</Block>
				<Slider min={MIN_MINES} max={maxMineCount} value={mineCount} onChange={onChangeMines} />
			</Block>
			<Button onClick={onClickStart}>Start</Button>
		</Block>
	);
};

export default Settings;