import styled from 'styled-components';
import { CELL_SIZE, CELL_MARGIN, CODES } from '../../constants';

export const Button = styled.button`
	background-color: ${({ cellCode }) => {
		switch (cellCode) {
			case CODES.NOTHING:
			case CODES.MINE:
				return 'lightskyblue';
			case CODES.FLAG:
			case CODES.MINE_FLAG:
				return '#F1C40F';
			case CODES.QUESTION:
			case CODES.MINE_QUESTION:
				return '#44D580';
			default:
				return 'white';
		}
	}};
	border: none;
	border-radius: 5px;
	box-sizing: border-box;
	color: ${({ cellCode }) => {
		switch (cellCode) {
			case 1:
				return '#0984E3';
			case 2:
				return '#00B894';
			case 3:
				return '#D63031';
			case 4:
				return '#223DAA';
			case 5:
				return '#D35400';
			case 6:
				return '#8E44AD';
			case 7:
				return '#904323';
			case 8:
				return '#FC427B';
			default:
				return 'black';
		}
	}};
	display: block;
	font-size: ${({ cellCode }) => cellCode > 0 ? 20 : 18}px;
	font-weight: bold;
	margin: ${CELL_MARGIN}px;
	outline: none;
	width: ${CELL_SIZE}px;
	height: ${CELL_SIZE}px;
`;