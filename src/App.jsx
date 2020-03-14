import React from 'react';
import { Block } from './styled';
import { SettingsContainer, BoardContainer } from './containers';

const App = () => {
	return (
		<Block
			bgColor='#3498DB'
			color='white'
			display='inline-block'
			padding='30px'
		>
			<h1>Minesweeper Game in React</h1>
			<SettingsContainer />
			<BoardContainer />
		</Block>
	);
};

export default App;