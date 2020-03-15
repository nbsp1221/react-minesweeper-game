import produce from 'immer';
import { MIN_WIDTH, MIN_HEIGHT, MIN_MINES, CODES } from '../constants';
import { initBoard, expandOpenedCell, getNextCellCode } from '../../lib/minesweeper';

const START_GAME = 'control/START_GAME';
const OPEN_CELL = 'control/OPEN_CELL';
const ROTATE_CELL_STATE = 'control/ROTATE_CELL_STATE';

export const startGame = (width, height, mines) => ({ type: START_GAME, width, height, mines });
export const openCell = (x, y) => ({ type: OPEN_CELL, x, y });
export const rotateCellState = (x, y) => ({ type: ROTATE_CELL_STATE, x, y });

const initialState = {
	gameState: 'init',
	boardData: [],
	width: MIN_WIDTH,
	height: MIN_HEIGHT,
	mines: MIN_MINES
};

export default function(state = initialState, action) {
	switch (action.type) {
		case START_GAME:
			return produce(state, draft => {
				draft.gameState = 'start';
				draft.boardData = initBoard(action.width, action.height, action.mines);
				draft.width = action.width;
				draft.height = action.height;
				draft.mines = action.mines;
			});
		case OPEN_CELL:
			return produce(state, draft => {
				const code = state.boardData[action.y][action.x];

				if (code === CODES.MINE) {
					draft.gameState = 'lose';
					draft.boardData[action.y][action.x] = CODES.EXPLODED;
				}
				else if (code === CODES.NOTHING) {
					const expandResult = expandOpenedCell(state.boardData, action.x, action.y);

					draft.boardData = expandResult.boardData;
				}
			});
		case ROTATE_CELL_STATE:
			return produce(state, draft => {
				const code = state.boardData[action.y][action.x];

				if (code !== CODES.OPENED) {
					draft.boardData[action.y][action.x] = getNextCellCode(code);
				}
			});
		default:
			return state;
	}
}