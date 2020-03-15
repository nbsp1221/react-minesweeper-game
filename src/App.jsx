import React from 'react';
import { Block } from './styled';
import { SettingsContainer, StatusContainer, BoardContainer } from './containers';

const App = () => {
	return (
		<Block
			bgColor='#3498DB'
			borderRadius='5px'
			color='white'
			display='inline-block'
			padding='30px'
		>
			<h1>Minesweeper Game in React</h1>
			<SettingsContainer />
			<StatusContainer />
			<BoardContainer />
		</Block>
	);
};

export default App;