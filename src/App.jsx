import React from 'react';
import styled from 'styled-components';

const App = () => {
	return (
		<MineSweeper>
			<Title>Minesweeper Game in React</Title>
		</MineSweeper>
	);
};

const MineSweeper = styled.div`
	background-color: #3498DB;
	border-radius: 15px;
	display: inline-block;
	padding: 30px;
	text-align: left;
`;

const Title = styled.h1`
	color: white;
	text-align: center;
`;

export default App;