import { MIN_WIDTH, MIN_HEIGHT, MIN_MINES } from '../constants';
import { initBoard } from '../../lib/functions';

const START_GAME = 'control/START_GAME';

export const startGame = (width, height, mines) => ({ type: START_GAME, width, height, mines });

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
			return {
				boardData: initBoard(action.width, action.height, action.mines),
				width: action.width,
				height: action.height,
				mines: action.mines,
				inGame: true
			};
		default:
			return state;
	}
}