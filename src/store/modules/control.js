import produce from 'immer';
import {
	MIN_WIDTH,
	MIN_HEIGHT,
	MIN_MINES,
	CODES
} from '../constants';
import {
	initBoard,
	expandOpenedCell,
	getNextCellCode,
	getFlagIncDec
} from '../../lib/minesweeper';

const START_GAME = 'control/START_GAME';
const UPDATE_ELAPSED_TIME = 'control/UPDATE_ELAPSED_TIME';
const OPEN_CELL = 'control/OPEN_CELL';
const ROTATE_CELL_STATE = 'control/ROTATE_CELL_STATE';

export const startGame = (width, height, mineCount) => ({ type: START_GAME, width, height, mineCount });
export const updateElapsedTime = () => ({ type: UPDATE_ELAPSED_TIME });
export const openCell = (x, y) => ({ type: OPEN_CELL, x, y });
export const rotateCellState = (x, y) => ({ type: ROTATE_CELL_STATE, x, y });

const initialState = {
	gameState: 'init',
	enableTimer: false,
	elapsedTime: 0,
	boardData: [],
	width: MIN_WIDTH,
	height: MIN_HEIGHT,
	mineCount: MIN_MINES,
	flagCount: 0,
	openedCellCount: 0
};

export default function(state = initialState, action) {
	switch (action.type) {
		case START_GAME:
			return produce(state, draft => {
				draft.gameState = 'start';
				draft.enableTimer = false;
				draft.elapsedTime = 0;
				draft.boardData = initBoard(action.width, action.height, action.mineCount);
				draft.width = action.width;
				draft.height = action.height;
				draft.mineCount = action.mineCount;
				draft.flagCount = 0;
				draft.openedCellCount = 0;
			});
		case UPDATE_ELAPSED_TIME:
			return produce(state, draft => {
				draft.elapsedTime++;
			});
		case OPEN_CELL:
			return produce(state, draft => {
				const code = state.boardData[action.y][action.x];

				// Start timer if click on cell
				if (!state.enableTimer) {
					draft.enableTimer = true;
				}

				if (code === CODES.MINE) {
					draft.gameState = 'lose';
					draft.enableTimer = false;
					draft.boardData[action.y][action.x] = CODES.EXPLODED;
				}
				else if (code === CODES.NOTHING) {
					const expandResult = expandOpenedCell(draft.boardData, action.x, action.y);
					draft.boardData = expandResult.boardData;
					draft.openedCellCount += expandResult.openedCellCount;

					// Win
					if (state.width * state.height - state.mineCount === draft.openedCellCount) {
						draft.gameState = 'win';
						draft.enableTimer = false;
					}
				}
			});
		case ROTATE_CELL_STATE:
			return produce(state, draft => {
				const code = state.boardData[action.y][action.x];

				if (code !== CODES.OPENED) {
					draft.boardData[action.y][action.x] = getNextCellCode(code);
					draft.flagCount += getFlagIncDec(code);
				}
			});
		default:
			return state;
	}
}