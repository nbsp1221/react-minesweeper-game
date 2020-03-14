import React from 'react';
import { MIN_WIDTH, MAX_WIDTH, MIN_HEIGHT, MAX_HEIGHT, MIN_MINES } from '../../store/constants';
import { Block, Slider, Button } from '../../styled';

const Settings = ({
	width,
	height,
	mines,
	maxMines,
	onSliderChangeWidth,
	onSliderChangeHeight,
	onSliderChangeMines,
	onClickStart
}) => {
	return (
		<Block mt='30px' textAlign='left'>
			<Block mb='20px'>
				<Block mb='5px'>Width: {width}</Block>
				<Slider min={MIN_WIDTH} max={MAX_WIDTH} value={width} onChange={onSliderChangeWidth} />
			</Block>
			<Block mb='20px'>
				<Block mb='5px'>Height: {height}</Block>
				<Slider min={MIN_HEIGHT} max={MAX_HEIGHT} value={height} onChange={onSliderChangeHeight} />
			</Block>
			<Block mb='30px'>
				<Block mb='5px'>Mines: {mines}</Block>
				<Slider min={MIN_MINES} max={maxMines} value={mines} onChange={onSliderChangeMines} />
			</Block>
			<Button onClick={onClickStart}>Start</Button>
		</Block>
	);
};

export default Settings;