import produce from 'immer';
import { MIN_WIDTH, MIN_HEIGHT, MIN_MINES } from '../constants';
import { initBoard, getNextCellCode } from '../../lib/functions';

const START_GAME = 'control/START_GAME';
const RIGHT_CLICK_CELL = 'control/RIGHT_CLICK_CELL';

export const startGame = (width, height, mines) => ({ type: START_GAME, width, height, mines });
export const rightClickCell = (x, y, code) => ({ type: RIGHT_CLICK_CELL, x, y, code });

const initialState = {
	boardData: [],
	width: MIN_WIDTH,
	height: MIN_HEIGHT,
	mines: MIN_MINES,
	inGame: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case START_GAME:
			return produce(state, draft => {
				draft.boardData = initBoard(action.width, action.height, action.mines);
				draft.width = action.width;
				draft.height = action.height;
				draft.mines = action.mines;
				draft.inGame = true;
			});
		case RIGHT_CLICK_CELL:
			return produce(state, draft => {
				draft.boardData[action.y][action.x] = getNextCellCode(action.code);
			});
		default:
			return state;
	}
}