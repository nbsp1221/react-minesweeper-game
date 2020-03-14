import styled from 'styled-components';
import { CELL_SIZE, CELL_MARGIN } from '../../store/constants';

const Cell = styled.button`
	background-color: lightskyblue;
	border: none;
	border-radius: 5px;
	box-sizing: border-box;
	display: block;
	font-size: 18px;
	margin: ${CELL_MARGIN}px;
	outline: none;
	width: ${CELL_SIZE}px;
	height: ${CELL_SIZE}px;
	&:hover {
		background-color: #6CC3F9;
	}
`;

export default Cell;