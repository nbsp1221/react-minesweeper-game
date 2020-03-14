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
		console.log(Array(width));
		const rowData = Array(width).fill(CODES.NOTHING);
		boardData.push(rowData);
	}

	for (let i = 0; i < shuffle.length; i++) {
		const y = Math.floor(shuffle[i] / width);
		const x = shuffle[i] % width;
		boardData[y][x] = CODES.MINE;
	}

	return boardData;
};