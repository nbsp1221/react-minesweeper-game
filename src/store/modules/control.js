import produce from 'immer';
import {
	MIN_WIDTH,
	MIN_HEIGHT,
	MIN_MINES,
	GAME,
	CODES
} from '../../constants';
import {
	initBoard,
	expandOpenedCell,
	getNextCellCode,
	getFlagIncDec
} from '../../lib/minesweeper';

const SHOW_SETTINGS = 'control/SHOW_SETTINGS';
const HIDE_SETTINGS = 'control/HIDE_SETTINGS';
const SET_GAME = 'control/SET_GAME';
const RESTART_GAME = 'control/RESTART_GAME';
const UPDATE_ELAPSED_TIME = 'control/UPDATE_ELAPSED_TIME';
const OPEN_CELL = 'control/OPEN_CELL';
const ROTATE_CELL_STATE = 'control/ROTATE_CELL_STATE';

export const showSettings = () => ({ type: SHOW_SETTINGS });
export const hideSettings = () => ({ type: HIDE_SETTINGS });
export const setGame = (width, height, mineCount) => ({ type: SET_GAME, width, height, mineCount });
export const restartGame = () => ({ type: RESTART_GAME });
export const updateElapsedTime = () => ({ type: UPDATE_ELAPSED_TIME });
export const openCell = (x, y) => ({ type: OPEN_CELL, x, y });
export const rotateCellState = (x, y) => ({ type: ROTATE_CELL_STATE, x, y });

const initialState = {
	enableSettings: false,
	gameState: GAME.READY,
	enableTimer: false,
	elapsedTime: 0,
	boardData: initBoard(MIN_WIDTH, MIN_HEIGHT, MIN_MINES),
	width: MIN_WIDTH,
	height: MIN_HEIGHT,
	mineCount: MIN_MINES,
	flagCount: 0,
	openedCellCount: 0
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SHOW_SETTINGS:
			return produce(state, draft => {
				draft.enableSettings = true;
			});
		case HIDE_SETTINGS:
			return produce(state, draft => {
				draft.enableSettings = false;
			});
		case SET_GAME:
			return produce(state, draft => {
				draft.width = action.width;
				draft.height = action.height;
				draft.mineCount = action.mineCount;
			});
		case RESTART_GAME:
			return produce(state, draft => {
				draft.gameState = GAME.READY;
				draft.enableTimer = false;
				draft.elapsedTime = 0;
				draft.boardData = initBoard(state.width, state.height, state.mineCount);
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
				draft.gameState = GAME.RUN;

				// Start timer if click on cell
				if (!state.enableTimer) {
					draft.enableTimer = true;
				}

				if (code === CODES.MINE) {
					draft.gameState = GAME.LOSE;
					draft.enableTimer = false;
				}
				else if (code === CODES.NOTHING) {
					const expandResult = expandOpenedCell(draft.boardData, action.x, action.y);
					draft.boardData = expandResult.boardData;
					draft.openedCellCount += expandResult.openedCellCount;

					// Win
					if (state.width * state.height - state.mineCount === draft.openedCellCount) {
						draft.gameState = GAME.WIN;
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