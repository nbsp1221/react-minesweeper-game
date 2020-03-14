import React from 'react';
import { Block, Slider, Button } from '../../styled';

const Settings = () => {
	return (
		<Block mt='30px' textAlign='left'>
			<Block mb='20px'>
				<Block mb='5px'>Width: 9</Block>
				<Slider min='9' max='30' />
			</Block>
			<Block mb='20px'>
				<Block mb='5px'>Height: 9</Block>
				<Slider min='9' max='30' />
			</Block>
			<Block mb='30px'>
				<Block mb='5px'>Mines: 10</Block>
				<Slider min='10' max='30' />
			</Block>
			<Button>Start</Button>
		</Block>
	);
};

export default Settings;