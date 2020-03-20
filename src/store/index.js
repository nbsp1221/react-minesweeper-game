import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './modules';

export default createStore(
	rootReducer,
	composeWithDevTools()
);