import React from 'react';
import { MIN_WIDTH, MAX_WIDTH, MIN_HEIGHT, MAX_HEIGHT, MIN_MINES } from '../../constants';
import { 
	Slider,
	Button
} from '../common';
import {
	Wrapper,
	WidthWrapper,
	Width,
	HeightWrapper,
	Height,
	MinesWrapper,
	Mines
} from './SettingsStyle';

const Settings = ({
	width,
	height,
	mineCount,
	maxMineCount,
	onChangeWidth,
	onChangeHeight,
	onChangeMines,
	onClickSet
}) => {
	return (
		<Wrapper>
			<WidthWrapper>
				<Width>Width: {width}</Width>
				<Slider min={MIN_WIDTH} max={MAX_WIDTH} value={width} onChange={onChangeWidth} />
			</WidthWrapper>
			<HeightWrapper>
				<Height>Height: {height}</Height>
				<Slider min={MIN_HEIGHT} max={MAX_HEIGHT} value={height} onChange={onChangeHeight} />
			</HeightWrapper>
			<MinesWrapper>
				<Mines>Mines: {mineCount}</Mines>
				<Slider min={MIN_MINES} max={maxMineCount} value={mineCount} onChange={onChangeMines} />
			</MinesWrapper>
			<Button onClick={onClickSet}>Set</Button>
		</Wrapper>
	);
};

export default Settings;