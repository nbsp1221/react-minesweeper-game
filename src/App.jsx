import React from 'react';
import { Settings } from './components';
import { Block } from './styled';

const App = () => {
	return (
		<Block
			bgColor='#3498DB'
			color='white'
			display='inline-block'
			padding='30px'
		>
			<h1>Minesweeper Game in React</h1>
			<Settings />
		</Block>
	);
};

export default App;