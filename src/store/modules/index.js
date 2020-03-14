import { combineReducers } from 'redux';
import { default as counterReducer } from './control';

export const rootReducer = combineReducers({
	counter: counterReducer
});