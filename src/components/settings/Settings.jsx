import React from 'react';
import { Block, Slider, Button } from '../../styled';

const Settings = ({
	width,
	height,
	mines,
	onSliderChangeWidth,
	onSliderChangeHeight,
	onSliderChangeMines,
	onClickStart
}) => {
	return (
		<Block mt='30px' textAlign='left'>
			<Block mb='20px'>
				<Block mb='5px'>Width: {width}</Block>
				<Slider min='9' max='30' value={width} onChange={onSliderChangeWidth} />
			</Block>
			<Block mb='20px'>
				<Block mb='5px'>Height: {height}</Block>
				<Slider min='9' max='30' value={height} onChange={onSliderChangeHeight} />
			</Block>
			<Block mb='30px'>
				<Block mb='5px'>Mines: {mines}</Block>
				<Slider min='10' max='30' value={mines} onChange={onSliderChangeMines} />
			</Block>
			<Button onClick={onClickStart}>Start</Button>
		</Block>
	);
};

export default Settings;