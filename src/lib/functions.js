import { CODES } from '../store/constants';

export const initBoard = (width, height, mines) => {
	const candidates = Array(width * height).fill().map((v, i) => i);
	const shuffle = [];
	const boardData = [];

	while (candidates.length > width * height - mines) {
		const chosen = candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0];
		shuffle.push(chosen);
	}

	for (let i = 0; i < height; i++) {
		const rowData = Array(width).fill(CODES.NOTHING);
		boardData.push(rowData);
	}

	for (let i = 0; i < shuffle.length; i++) {
		const x = shuffle[i] % width;
		const y = Math.floor(shuffle[i] / width);
		boardData[y][x] = CODES.MINE;
	}

	return boardData;
};

export const getCellText = (code) => {
	switch (code) {
		case CODES.OPENED:
		case CODES.NOTHING:
			return '';
		case CODES.FLAG:
		case CODES.MINE_FLAG:
			return '🏁';
		case CODES.QUESTION:
		case CODES.MINE_QUESTION:
			return '❓';
		case CODES.MINE:
			return '💣';
		case CODES.EXPLODED:
			return '💥';
		default:
			return code;
	}
};