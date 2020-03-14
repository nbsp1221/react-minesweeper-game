import { combineReducers } from 'redux';
import { default as controlReducer } from './control';

export const rootReducer = combineReducers({
	control: controlReducer
});