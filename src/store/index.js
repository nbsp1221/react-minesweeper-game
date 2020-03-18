import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './modules';

export default createStore(
	rootReducer,
	composeWithDevTools()
);