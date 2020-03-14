// Config
export const MIN_WIDTH = 9;
export const MAX_WIDTH = 20;
export const MIN_HEIGHT = 9;
export const MAX_HEIGHT = 20;
export const MIN_MINES = 10;

// States of Cell
export const CODES = {
	OPENED: 0,
	NOTHING: -1,
	FLAG: -2,
	QUESTION: -3,
	MINE: -4,
	MINE_FLAG: -5,
	MINE_QUESTION: -6,
	EXPLODED: -7
};